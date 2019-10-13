echo "Is this a good question (y/n)? "
read answer
 # if echo "$answer" | grep -iq "^y" ;then
if [ "$answer" != "${answer#[Yy]}" ] ;then
    echo Yes
else
    echo No
fi