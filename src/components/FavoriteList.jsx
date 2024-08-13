
function FavoriteList({items, title}){
        return (
            <div>
                <h2
                    style={{ color: 'green',fontSize: '24px',fontWeight:'bold',}}
                    >
                    {title}
                    </h2>
                <ul style={{listStyleType: 'none', padding:0}}>
                    {items.map((item, index) => (
                        <li 
                        key={index}
                            style={{color:'blueviolet',margin: '5px 0',}}
                            > {item}  
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

export default FavoriteList;