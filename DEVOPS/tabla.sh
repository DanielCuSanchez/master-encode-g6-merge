# Hola mundo

echo "? $?"
echo "# $#"
echo "@ $@"
numero=$1
desde=$2
hasta=$3
echo "Tabla de multiplicar del $numero desde $desde hasta $hasta"

for (( i=$desde; i<= $hasta; i++ ))
do
  resultado=$(($numero * $i))
  echo  "$numero  X  $i = $resultado"
done


# 3 X 1, 3 X 2, 3 X 3