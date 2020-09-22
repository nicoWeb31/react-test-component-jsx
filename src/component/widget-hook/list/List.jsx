import React, { useEffect, useRef, useState } from 'react';


const List = ({ options, label,selected,onSeletedChange }) => {

    const [open,setOpen] = useState(false)
    const RefDomDropDown = useRef()


    // empty array run ontime at the mount component
    useEffect(()=>{

        const onBodyClick = ({target})=>{
            //si on click dans l'element auquel on fait reference ou fait rien
            if(RefDomDropDown.current.contains(target)) return
            setOpen(false)
        }
        document.body.addEventListener('click', onBodyClick)



        return () =>{
            document.body.removeEventListener('click',onBodyClick)
        }
    },[])

    const onClickChange = (option) =>{
        onSeletedChange(option);
        setOpen(false)
    }


    const onClickSetOpen =()=>{
        setOpen(!open)
    }

    const renderOption = options.map((option) => {

        if(option.value === selected.value){
            return null;
        }

        return (
            <div 
            className="item" 
            key={option.value}
            onClick={()=>onClickChange(option)}
            
            >
                
                {option.label}
            </div>

        )
    })

    //ref.current ------------//
    //console.log(RefDomDropDown.current)

    return (
        <>
            <h1>Liste - option - color</h1>
            <div className="ui form" style={{backgroundColor: selected.value}} ref={RefDomDropDown}>
                <div className="field">
                    <label className='label'>
                        {label}
                    </label>
                    <div className={(open && "visible active") + " ui selection dropdown"} onClick={onClickSetOpen} >
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className={`${open && 'visible transition'} menu`}>
                            {renderOption}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default List;