read -p "enter the rows" r
r=$r+1
for (( i=0; i<r; i++ ))	
do
	for (( j=0; j<r-i; j++))
        do
                echo -n  " "
        done
	for (( j=0; j<2*i-1 ; j++))
	do
		echo -n "*"
	done
	echo
done

