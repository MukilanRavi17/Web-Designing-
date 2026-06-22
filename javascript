<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
     let a=10,b=3.14,c="Java",d=true,e=null
     document.write(typeof(a)+"<br>")
     document.write(typeof(b)+"<br>")
     document.write(typeof(c)+"<br>")
     document.write(typeof(d)+"<br>")
     document.write(typeof(e)+"<br>")
    </script>
</body>
</html> 


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let a=10,b=7
        document.write((a+=b)+"<br>")
        document.write((a-=b)+"<br>")
        document.write((a*=b)+"<br>")
        document.write((a/=b)+"<br>")
        document.write((a%=b)+"<br>")
        document.write((a**=b)+"<br>")
    </script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
       for (let a=1;a<=10;a++)
       {
        document.write(a+"<br>")
       }
    </script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
    for (let a=10;a>=1;a--)
    {
        document.write(a+"<br>")
    }
    </script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let a={'Name':'Mukilan','Age':'22','Course':'Java'}
        document.write(typeof(a)+"<br>")
        for (let x in a)
    {
        document.write(x+":"+a[x]+"<br>")
    }
    </script>
</body>
</html> 


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let a=[15,5659,69,5659,"hello",3.14]
        for(let x of a)
    {
        document.write(x+"<br>")
    }
    let s="Java"
    for(let f of s)
    {
        document.write(f+"<br>")
    }
    </script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let a=10,b=7
        document.write((a+=b)+"<br>")
        document.write((a-=b)+"<br>")
        document.write((a*=b)+"<br>")
        document.write((a/=b)+"<br>")
        document.write((a%=b)+"<br>")
        document.write((a**=b)+"<br>")
    </script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let a=parseInt(prompt("enter the first number...."))
        if(a%2!=0)
    {
        document.write("odd number")
    }
    else{
        document.write("even number")
    }
    </script>
</body>
</html>
