//VS PPT: https://drive.google.com/file/d/1pjOZp8Xp6Ghb31Nfnj0YRsVwAzMMyhCq/view?usp=sharing
//JS PPT: https://drive.google.com/open?id=0BwN5VWV_C7-5ZnE3d045YWZJb00
//Javascript ���嚙踝蕭嚙質��嚙踝蕭��輯撒嚙踝蕭

var weight,height



const readline = require('readline-sync')
weight = readline.question('��ｇ蕭���閰剁蕭鈭歹蕭��踝蕭嚙賣��嚙踝蕭嚙踝蕭(kg)?')
if (weight>=10 && weight<=200){
    height = readline.question('��ｇ蕭���閰剁蕭鈭歹蕭��踝蕭嚙賡�冽��嚙踝蕭(cm)?')
    if (height>=50 && height<=220){
        var bmi = weight/((height/100)**2)
        console.log("Hello! Your BMI value is "+ bmi)
    } else {
        console.log("��冽��嚙踝蕭���閰剁蕭隞選蕭��芰�����嚙賡�ｇ蕭嚙踝蕭嚙踝蕭嚙賢�����嚙踝蕭嚙�")
    }
} else {
    console.log("���嚙踝蕭嚙踝蕭���閰剁蕭隞選蕭��芰�����嚙賡�ｇ蕭嚙踝蕭嚙踝蕭嚙賢�����嚙踝蕭嚙�")
}


//��輯撒嚙賢�賣斯���嚙踝蕭嚙賢音嚙踝蕭���嚙� readline-sync (��綽蕭��輯撒嚙賢�鳴蕭嚙賡��閰剁蕭鈭伐蕭嚙踝蕭嚙踝蕭��綽蕭���嚙賣��嚙踝蕭嚙踝蕭���瞏�嚙踝蕭嚙踝蕭���嚙踝蕭) 
//NodeJS ���嚙賡����交��嚙踝蕭嚙質��嚙賣��嚙踝蕭嚙踝蕭 npm���嚙踝蕭嚙踝蕭嚙踝蕭嚙踝蕭嚙踝蕭��荔蕭��∟��嚙踝蕭���閰剁蕭鈭歹蕭嚙賡��嚙�
//��堆蕭���嚙� readline-sync ���嚙賡�����嚙踝蕭���嚙�: npm install readline-sync
//嚙踝蕭銵�嚙質�恬蕭嚙踝蕭嚙踝蕭package.json嚙踝蕭嚙賣�堆蕭嚙踝蕭嚙踝蕭嚙踝蕭嚙踝蕭鞈�嚙踝蕭���嚙賡�����嚙踝蕭 npm install 嚙踝蕭��喉蕭��穿蕭嚙賡��嚙踝蕭嚙踝蕭嚙踝蕭嚙賣��嚙賡��嚙�


//not only bmi value, but also judgement
//Ask user to input height only, is it workable?