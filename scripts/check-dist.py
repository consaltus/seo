# Prüft den Build in dist/: JSON-LD parsebar, hreflang-Paare vollständig und wechselseitig, keine externen Ressourcen.
# Aufruf nach dem Build: python3 scripts/check-dist.py
import re, json, os, glob, sys
D='dist'; SITE='https://placeholder-domain.example'
pages=sorted(glob.glob(D+'/**/*.html',recursive=True))
def path_of(f):
    p=f[len(D):]
    return p.replace('index.html','') if p.endswith('index.html') else p
ok=True
graph_ids={}
print('== JSON-LD')
for f in pages:
    html=open(f).read()
    for m in re.findall(r'<script type="application/ld\+json">(.*?)</script>',html,re.S):
        try: data=json.loads(m)
        except Exception as e: print('INVALID',f,e); ok=False; continue
        ids=[n['@id'] for n in data['@graph']]
        types=[n['@type'] for n in data['@graph']]
        print(path_of(f),'nodes:',len(ids),'types:',types)
        graph_ids[path_of(f)]={n['@id']:n for n in data['@graph']}
        for n in data['@graph']:
            if n['@type'] in ('Service','FAQPage','WebPage') and 'inLanguage' not in n: print('  missing inLanguage',n['@id']); ok=False
de,en=graph_ids.get('/'),graph_ids.get('/en/')
shared=[i for i in de if i in en]
print('shared @id DE/EN:',shared)
print('DE-only:',[i for i in de if i not in en]); print('EN-only:',[i for i in en if i not in de])
print('== hreflang')
for f in pages:
    html=open(f).read()
    noindex='name="robots" content="noindex' in html
    alts=dict(re.findall(r'<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"',html))
    canon=re.search(r'<link rel="canonical" href="([^"]+)"',html).group(1)
    if noindex:
        print(path_of(f),'noindex, alternates:',len(alts)); continue
    issues=[]
    if set(alts)!={'de','en','x-default'}: issues.append('set '+str(set(alts)))
    if canon not in alts.values(): issues.append('self missing')
    for lang,href in alts.items():
        assert href.startswith(SITE)
        tgt=D+href[len(SITE):]+'index.html'
        if not os.path.exists(tgt): issues.append('missing target '+href); continue
        back=dict(re.findall(r'<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"',open(tgt).read()))
        if back!=alts: issues.append('not reciprocal with '+href)
    print(path_of(f), 'OK' if not issues else issues, alts.get('de'), alts.get('en'))
    ok = ok and not issues
print('== externe Referenzen in HTML/CSS/JS (src, href auf Ressourcen, url(), @import)')
ext=[]
for f in glob.glob(D+'/**/*',recursive=True):
    if not f.endswith(('.html','.css','.js')): continue
    s=open(f,errors='ignore').read()
    for m in re.findall(r'(?:src|srcset)="([^"]+)"',s)+re.findall(r'<link[^>]+rel="(?:stylesheet|preload|modulepreload|icon|apple-touch-icon|manifest|preconnect|dns-prefetch)"[^>]*href="([^"]+)"',s)+re.findall(r'url\(([^)]+)\)',s)+re.findall(r'@import\s+["\']([^"\']+)',s)+re.findall(r'<script[^>]+src="([^"]+)"',s):
        if re.match(r'^(https?:)?//',m.strip('\'"')): ext.append((f,m))
print(ext or 'keine')
print('RESULT', 'PASS' if ok and not ext else 'FAIL')
sys.exit(0 if ok and not ext else 1)
