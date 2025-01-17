import '../style.css';

function Botones (props) {

    return ( 
        <div className='Botones-div'>
            <button className={`Buttons ${props.selectedType === 'breakfast' ? 'selected':''}`} onClick={() => props.handleProductTypeClick('breakfast')}>Desayuno</button>
            <button className={`Buttons ${props.selectedType === 'meal' ? 'selected':''}`} onClick={() => props.handleProductTypeClick('meal')}>Comida</button>
        </div>
    );
    
}

export default Botones;