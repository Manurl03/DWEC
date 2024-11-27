#!/bin/bash

# Parámetros
numero_de_carpetas=13 # Cambia este número por el que necesites
directorio_base="." # Carpeta base donde se crearán las subcarpetas

# Crear las subcarpetas
for i in $(seq 1 $numero_de_carpetas); do
    nombre_carpeta=$(printf "%s/U4_A%02d" "$directorio_base" "$i")
    mkdir -p "$nombre_carpeta"
    echo "Carpeta creada: $nombre_carpeta"
done
