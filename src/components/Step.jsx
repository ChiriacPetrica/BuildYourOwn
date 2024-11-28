const Step = ({title,description, link, points, checked}) =>{
    return (
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
            <a href="" target="_blank">{link}</a>
            <p>{points}</p>
            <input type="checkbox" value={checked} id={title}  />
            <label htmlFor={title}>am inteles, sa traiti</label>
        </div>
    )
};

export default Step;