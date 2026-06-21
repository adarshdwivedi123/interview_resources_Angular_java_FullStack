why we dvelpe this project 
Product name is Resource Mapping  reason behind the developeing htis product collct the data od mantial  health in each staste and ditric level and talul and viallage 
earlier givemtn in diffenr collectint the data on paper to overveom this we  are developing thr produt nomnaula work is thier 

MYROle
i ahve the developted this entire project using  claude     AI 

Techlogu we use anguale 21 +signal we use + spring boot.


Featue in this project we have  4 ROle 
Admin we ahve creaate  the send to user to their mail id.
data entry  enter the data  and send for approval ahere approcal repsone wapprocal the dataa ans spc 
statte  prgram authiru approve and edit the data.
ADMIN is resposible for giveing acces which user have which have 

here we have roel based 
1)distry entry
2)Apporve the data.
3)SPC(State prgram coordinatioe
4)ADMIN
5)MI



currently i am working on the secuity featue 
1) Santize allt eh input|
2)Guards
3)JWt token Secure vlaidate thar we have use keyclock
4)Captacha implemntaion

1)Technlogu we have used in thsi project java with spring booot andangualr 21 
2)



HOw we are devlope the porjec
1) we ahve  create figma using Ai + and afther we creaare fRD so that any developer come in futire understnad using that frd + backend guy is geberating the  api endpoint + db Desing 
once all of the done we  claude  give prompt  w esend for revirew we have spend lot of time on thae
we have this design figma +   FRD +  after that we have given we have this thing build the project 
in my cae i have  create proejct feom asracth itself so that works shouel be faster.

challenge  in this project 
1) i am the first given reposnbiltut to develop this product .
2) we have to ask ai create a figm as it simple ui it is creadtr but come to nested yes or no it is
not able to cretted themmanullay i ahve given the command creatred in each seciton
code practise  we ahve to guide in each specif place else he  is asuuimg and devloep the  code by own.
will create claude.md where we have write eegery thing best practisse every time i  start the seesopnread the session acoid assummmi  follo best pracitises.

we have geneareted the figma ftetr thaat we in  some plac we assume Ai with do that correclt some place w ehave defeloperd the screen when Ai creaed based his assume hi created that ui is not peroiper some fieod are mismatrchinf 


----------------------------------------------------
ROle based implmented
"We have 5 user roles — District Entry, District Approver, SPC, Ministry, and Admin. When a user logs in, their role comes from 
  ▎ the backend and we store it. Then we use Angular route guards to check the role before letting them open any page. If the role 
  ▎ doesn't match, we redirect them.



  -----------------------------------------------------------
    How to tell the full story in an interview (the flow)

  1. User logs in → backend sends role → stored in a signal + sessionStorage.
  2. User clicks a page → Angular runs the route's guard before loading it.
  3. Guard asks AuthService hasRole(...) → return true (show page) or redirect.
  4. Sidebar is also computed from the role so the UI matches their access.
  5. Security note: roles are an enum (type-safe, no typos), and guards are the real enforcement — the hidden menu is just
  convenience.



  -------------------------------------------------------
  "In our project we had multiple roles — like district entry, admin, state level users. Each role had different access to different parts of the UI.


Instead of writing role checks inside every component, we centralized it using a custom structural directive called appHasRole.


The directive uses Angular Signals to reactively track the current user's role. When the user logs in, we get the role from the API response and set it in a signal inside AuthService. The directive has an effect() that automatically runs whenever that signal changes — it either renders or removes the element from the DOM using ViewContainerRef.


We also handle the isRendered flag to prevent duplicate elements when the role signal updates multiple times.


The benefit is — role logic lives in one place, it's fully reactive, no manual subscribe or unsubscribe, and we just use it in the template like:




-----------------------------------------------------