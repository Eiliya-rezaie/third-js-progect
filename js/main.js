// if elseif else
// for
// function
// array
/* method => number() string() join() push() pop() unshift() shift() concat()
 splice() slice() indexof() lastindexof() */
function log(variable){
    console.log(variable)
}
////////////////////////////
function signup(){
    let firstname;let lastname;let year=Number;let pass=Number;let initpass=Number;let newfirstname;let newlastname;
    let fullname=[];let age=[];let full=[];let password=[];let oldfullname=[]
    firstname=prompt(`enter your firstname`,`eiliya`)
    if(firstname){
        fullname.unshift(firstname);
        // log(fullname)
        lastname=prompt(`enter your lastname`,`rezaie`)
        if(lastname){
            fullname.push(lastname);
            year=Number(prompt(`enter your age`));age[0]=year;
            full=fullname.concat(age);/*log(full)*/
            // console.log(full.indexOf(year));
            pass=Number(prompt(`please enter a password ( for examle 12345 )`,`13333`));password[0]=pass;
            if(full[2]>=18){
                /*log(full)*/;log(`you can join ${fullname[0]} ${fullname[1]}`)
                let start;start=prompt(`do you wanna change your name?( yes or no )`,`yes`);
                if(start===`yes`){
                    log(`ok let's change your fullname`);
                    initpass=Number(prompt(`please enter you pasword ${fullname[0]}`))
                    if(initpass===password[0]){
                        log(`pass was true`)
                        newfirstname=prompt(`please enter your new name`);
                        if(newfirstname){
                            oldfullname=fullname.splice(0,1,newfirstname)
                            newlastname=prompt(`enter your new lastname`)
                            if(newlastname){
                                oldfullname=fullname.splice(1,1,newlastname);
                                log(`your new fullname is ${fullname[0]} ${fullname[1]}`)
                            }
                        }else{
                            log(`your name was wrong`)
                        }
                    }else{
                        log(`pass was false`)
                    }
                }
            }else{
                log(`you can't join`)
            }
        }
    }
}
////////////////////////////
signup();

 