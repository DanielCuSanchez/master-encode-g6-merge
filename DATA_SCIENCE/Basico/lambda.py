palindrome = lambda frase: frase.replace(' ', '').lower() == frase[::-1].replace(' ', '').lower()

print(palindrome("anita lavA la tinA"))