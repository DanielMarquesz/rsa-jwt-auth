# RSA key pair validation JWT

A quick test and example of using the RSA algorithm for validation of a JWT token =).

The main objective of this validation is to ensure that the JWT token was not modified when received by the server.

![alt text](image url "image Title")

The flux above show the path of a JWT token in a request the main reason of using the key pair encryption is that in case of the user or a malicious person have access of the token and try to modify, then the server will detect that change by using the public key, making the requests a little more secures. =)

You can clone and try by yourself!

### Steps

1 - npm install
<br>
2 - Generate a key par value: https://travistidwell.com/jsencrypt/demo/
<br>
3 - Fill the files `private.key` and `public.key` with the respective values.
<br>
4 - Copy token generated, then decode the second part after the dot using a base64 decode(you can use:https://www.base64decode.org/).
<br>
5 - After the decode change the payload value, then encode, then replace after the second dot in the original token.
<br>
6 - Paste the full alterade token in the variable `altered_token`, then you shold recieve a validation error.


## Referências

* https://www.youtube.com/watch?v=F0HLIe3kNvM&ab_channel=StuartWilliams

* https://medium.com/@tarcisioma/algoritmo-de-criptografia-assim%C3%A9trica-rsa-c6254a3c7042

