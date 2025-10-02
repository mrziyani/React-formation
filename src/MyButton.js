import './MyButton.css'


const btn = {
    name : 'reda',
    age : 22,
};

let content;
if(btn.name == 'reda')
    content = 'welcome reda'
else 
    content = 'you re not welcome'

const users = [
    {id : '1', name : 'reda' , age : 20},
    {id : '1', name : 'khalil' , age : 21},
    {id : '1', name : 'taha' , age : 22},
];

const listUsers = users.map(user => (
  <tr key={user.id}
  style={{
    color: user.age > 20 ? 'red' : 'green'
  }}>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.age}</td>
  </tr>
));



function MyButton({ onClick }) {
    
    return (
        <div>
        {content}
        <button className="my-btn" onClick={onClick}> {btn.name} ziyani button </button>
        <ul>{listUsers}</ul>
        </div>
    )
}

export default MyButton;
