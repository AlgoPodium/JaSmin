<html>
    <head>
        <meta charset="UTF-8">
        <title>출력결과</title>
    </head>
    <body>
        <script>
            function solution(a, b, c){
                let answer="YES", max;
                let tot=a+b+c;
             // a+b 가 c보다 작아야함
                if(a>b) max=a;
                else max=b;
                if(c>max) max=c;

              
                if(tot-max<=max) answer="NO"; 
                return answer;
            }

            console.log(solution(13, 33, 17));
        </script>
    </body>
</html>
