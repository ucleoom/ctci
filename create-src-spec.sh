cp src/template.js src/$1.js
sed -e "s/template/$1/" spec/template.spec.js > spec/$1.spec.js
