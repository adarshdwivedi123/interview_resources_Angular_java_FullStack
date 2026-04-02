interface is used to define the shape of data.
#)interface is strututre  that tell to object wat are the property  have inside the object
and wat is thier data type.
(interface  basically define the object format)



🚀 Example
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

Iska matlab:

User object me ye fields honi chahiye:

id → number
name → string
isActive → boolean
🚀 Use with object
const user: User = {
  id: 1,
  name: 'Adarsh',
  isActive: true
};

Ye bilkul sahi hai ✅

❌ Agar property missing ho
const user: User = {
  id: 1,
  name: 'Adarsh'
};

To TypeScript error dega ❌

Kyuki isActive missing hai.
