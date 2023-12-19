Website : Yoga Registration Form

FrontEnd : https://github.com/Venkat5452/myfrontend_yoga

BackEnd : https://github.com/Venkat5452/mybackend_yoga

FrontEnd : Reactjs,Bootstrap,Css

BackEnd  : MongoDB,Nodejs,Expressjs.

Website Link : https://myyogawebsite.netlify.app

Assumptions:
1. User can only Register only for the month.
2. User Will only can register if he/she made payment for his/her last registration or its his/her new registration.
3. User being identified by email.


Here is the ER Diagram of the Database (MongoDB):

![image](https://github.com/Venkat5452/myfrontend_yoga/assets/106301959/f59fca56-a030-4194-91cd-cd1fb48e040e)


How it Works :
1) User will be asked to Enter His/Her details(Name and Email). ![Screenshot (138)](https://github.com/Venkat5452/myfrontend_yoga/assets/106301959/a0e4f89f-61e5-4e0d-a0db-396e0a472b60)

2) Number of users registered in the current month being displayed to help both admin and users. 
3) If a registered user for the current month tries to register again for the same month, then an error message showing details is displayed.![Screenshot (137)](https://github.com/Venkat5452/myfrontend_yoga/assets/106301959/9f0b49bd-73b0-4e87-bacd-e5aaf7e94a89)
4) If user not registered in the current month it will be checked if he/she paid the last registration payment. if payed will redirect to book for the current month else will be asked to pay for the last month registration to continue registration for this month.![Screenshot (131)](https://github.com/Venkat5452/myfrontend_yoga/assets/106301959/21da57a4-4e78-4672-8482-70c8525117c6)

5) If User not at all registered once will directly to the Slotbooking page.![Screenshot (134)](https://github.com/Venkat5452/myfrontend_yoga/assets/106301959/25317325-b88a-4523-a5e3-d494730c3cf5)

6) Once the user reach the Slotbooking page he/she asked to Enter Age(Should be between 18-65) , phone number and can pick the slot.
7) User can choose any of the options wheather to pay now or pay later.![Screenshot (135)](https://github.com/Venkat5452/myfrontend_yoga/assets/106301959/e8db1c27-2638-4ef6-b341-c0f854d6f2fc)

8) Registration completed succesfully will be displayed and user details being entered into the database.![Screenshot (136)](https://github.com/Venkat5452/myfrontend_yoga/assets/106301959/f42f1c84-b6f1-44f2-b1ad-a3bbff0c69eb)
 
