import React from 'react';

const users = [ 
  { name: "John Doe", id: 1, career: 'Software engineer' }, 
  { name: "Jane Doe", id: 2, career: 'Data scientist' }, 
  { name: "Billy Doe", id: 3, career: 'Cyber security analyst' } 
];

function Users(props){
    return(
        <div>
            <p>Name: {name}</p>
            <p>Career: {career}</p>
            <p>Id: {id}</p>
        </div>

    );
};

export default users