const PeopleList = ({ teammate }) => {
  console.log('teammate', teammate);
  return <ul>{teammate && teammate.map(el => <li>{el.email}</li>)}</ul>;
};

export default PeopleList;
