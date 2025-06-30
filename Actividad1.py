numero = int(input("Digite un numero:"))
if numero % 2 == 0:
    print("El numero es par")
else:
    print("El numero es impar")
    
    # Mostrar pares hasta un limite
limite = int(input("Digite el numero limite:"))
print("Numeros pares hasta al limite")
for i in range(0, limite + 1, 2):
    print(i)

