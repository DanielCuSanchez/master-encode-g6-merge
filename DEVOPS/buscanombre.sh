
echo "Buscando el nombre en el archivo..."

# Este paso filtra del archivo el nombre que recbimos en argumento 1
puesto=`cat File_script.txt | egrep $1 | cut -f2 -d,`

# Se valida que el puesto exista
if [[ $puesto ]]
then
  echo "La persona $1 tiene el puesto $puesto"

  if [[ $puesto = "Software Enginer" ]]
  then
    echo "El mas perrón de todos"
  fi

else
  echo "La persona $1 NO EXISTE en el archivo"
fi
