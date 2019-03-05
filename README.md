"# travel-expenses-front"

1.  Napraviti direktorijum po zelji i pristupiti mu preko terminala.

2.  Iz tog direktorijuma pokrenuti komandu: git init

3.  Dalje iz tog direktorijuma pokrenuti: git remote add origin https://github.com/mmisojcic/travel-expenses-front.git

4.  Proverite da li je uspesno dodat repositorijum sa: git remote -v

    treba da vrati:
    origin https://github.com/mmisojcic/travel-expenses-front.git (fetch)
    origin https://github.com/mmisojcic/travel-expenses-front.git (pull)

    Ako vam izbaci:

             *** Please tell me who you are.

            Run

        git config --global user.email "you@example.com"
        git config --global user.name "Your Name"

        dodati svoj email sa: git config --global user.email "vas email" sa github
               i username sa: git config --global user.name "vase korisnicko ime" sa github

        ako ne bude ovo trazio, opusteno, trazice vam username i password pojedinacno za komitove.

5.  Posle svega ovoga ako je bilo uspesno, povuci sve sa remote reposotory sa: git pull origin remote

6.  node_modules je stavljen na .gitignore da ga ne bi svaki put uploadovali jer dosta zauzima.
    Zato ga necete imati. Iz foldra project pokrenite: npm i
