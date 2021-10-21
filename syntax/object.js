var members = ['youngjun', 'sinee', 'gogo'];
console.log(members[1]);//sinee

var i = 0;
while(i < members.length){
  console.log('array loop',members[i]);
  i = i + 1;
}

var roles ={'programmer':'youngjun',
            'designer' : 'sinee',
            'manager' : 'gogo'};

console.log(roles.programmer);

for(var name in roles){
  console.log('key =>', name, ', value = > ', roles[name]);
}
