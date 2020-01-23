var template ={
  Title: 'Indecision App',
  Subtitle: 'Practice Session'
}
var user ={
  Name:'Surya',
  Age:28,
  Mobile:9032586092,
  Designation:'Full Stack Developer',
  Location:'Rajamahendravaram'
};
function getlocation(Location){
  return Location ? <p> Location : {Location} </p> : <p> Location : {'Unknow'} </p> ;
}
var template = (
  <div>
    <h1> {template.Title} </h1>
    <h3> {template.Subtitle} </h3>
    <p> Username :{user.Name.toUpperCase()} </p>
    { user.Age && user.Age >= 18 && <p> Age :{user.Age} </p> }
    <p> Mobile :{user.Mobile} </p>
    <p> Designation :{user.Designation} </p>
      {getlocation(user.Location)}
  </div>
);
var appRoot = document.getElementById('app');

render (template, appRoot);