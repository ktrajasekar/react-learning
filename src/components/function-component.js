/* 
 Functional Component

 Ref Link - 
 https://www.digitalocean.com/community/tutorials/how-to-create-custom-components-in-react
 https://www.freecodecamp.org/news/react-props-cheatsheet/
 
*/
import "./function-component.css";

export default function welcome({
  name,
  showColor,
  title,
  description,
  dataObj,
}) {
  if (showColor) {
    return (
      <div>
        <p> Hello {name}</p>
        <h1 className="hello-name">{title}</h1>
        <div>{description}</div>
        <h2>Object Iteration</h2>
        <div className="data-obj">
          {dataObj.map((item, index) => (
            <div key={item.id}>
              <h3>
                {index + 1}){item.title}
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
}
