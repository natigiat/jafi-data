




################################################################ part 1:: get all domains loop #################################3

# get all links from page

# > domainsNew.txt
# > domains.txt

# curl "http://codepen.io/search/pens/?page=12&q=form" 2>&1 | grep -o -E 'href="([^"#]+)"' | cut -d'"' -f2 >> domains.txt

# cat domains.txt | sort -u > domainsNew.txt 

# sed -i.bak '/details/d' domainsNew.txt 

# sed -i '1,/http:\/\/codepen.io\//d' domainsNew.txt 

# sed -i.bak '/drbl/,$d' domainsNew.txt 


################################################################ part 1:: set all data #################################3


wget -O EarCt.html http://codepen.io/simeydotme/pen/EaVxOa



> content.html
> content.txt
> content.json

################################ start html ##############################################
# get totalt number of page
total=$(cat EarCt.html | wc -l)
# echo $total


htmlstart=$(grep -n 'id="html"' EarCt.html |cut -f1 -d:)
echo $htmlstart

htmlend=$(grep -n 'error-bar-html' EarCt.html |cut -f1 -d:)
echo $htmlend

# html= 'expr $total - $var'
htmlSum=`expr $htmlend - $htmlstart`
html=`expr $total - $htmlstart`
echo $htmlSum

echo "{" >> content.json
echo '	"userId" : "234234",' >> content.json
echo '	"name" : "adm",' >> content.json
echo '	"html" : "' >> content.json

# cat EarCt.html | tail -$html | head -$htmlSum  >> content.json
# sed -n "$htmlstart,$htmlendp" EarCt.html >> content.json
awk 'NR >= $htmlstart && NR <= $htmlend' EarCt.html >> content.json


sed -i '/<code>/d' content.json
sed -i '/<\/code>/d' content.json
sed -i '/<\/pre>/d' content.json
sed -i '/error-bar-html"/d' content.json
echo '	", ' >> content.json

################################ start css ##############################################

cssstart=$(grep -n 'id="css"' EarCt.html |cut -f1 -d:)
# echo $cssstart

cssend=$(grep -n 'error-bar-css' EarCt.html |cut -f1 -d:)


# html= 'expr $total - $var'
cssSum=`expr $cssend - $cssstart`
css=`expr $total - $cssstart`

echo '	"css" : "' >> content.json

cat EarCt.html | tail -$css | head -$cssSum >> content.json


sed -i '/<code>/d' content.json
sed -i '/<\/code>/d' content.json
sed -i '/<\/pre>/d' content.json
sed -i '/error-bar-css"/d' content.json
echo '	", ' >> content.json


################################ start css ##############################################


jsstart=$(grep -n 'id="js"' EarCt.html |cut -f1 -d:)
# echo $jsstart

jsend=$(grep -n 'error-bar-js' EarCt.html |cut -f1 -d:)
# echo $jsend

# html= 'expr $total - $var'
jsSum=`expr $jsend - $jsstart`
js=`expr $total - $jsstart`

echo '	"js" : "' >> content.json
cat EarCt.html | tail -$js | head -$jsSum  >> content.json


sed -i '/<code>/d' content.json
sed -i '/<\/code>/d' content.json
sed -i '/<\/pre>/d' content.json
sed -i '/error-bar-js"/d' content.json
echo '	"' >> content.json


echo "}" >> content.json

sed -i '/^\s*$/d' content.json

# sed -i 'N;s/\/ /' content.json


# cat content.txt | php -R 'echo html_entity_decode($argn);' >> content.html

# awk '{print $2,$55;}' EarCt.html >> content.txt

# > content.txt


