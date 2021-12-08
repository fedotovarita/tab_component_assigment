import { React, useCallback, useState, useRef, useEffect} from "react";
import cn from 'classnames';
import './Tabs.css';

const Tabs = (props) => {
    const firstActiveTab = props.children[0].props.name;
    const [activeTab, setActiveTab] = useState(firstActiveTab);
    const handleActiveTab = useCallback(name => setActiveTab(name), []);
    const visibilityRef = useRef(null);

    useEffect(() => {
        visibilityRef.current.scrollIntoView({ behavior: 'smooth'});
    });

    const tabs = props.children.map((child, i) => (
        <button 
            key={i}
            onClick={() => handleActiveTab(child.props.name)}
            className={cn('tab', activeTab === child.props.name ? 'active' : null, child.props.disabled ? 'disabled' : null)}
            disabled={child.props.disabled}
            ref={activeTab === child.props.name ? visibilityRef : null}
        >
            {child.props.name}
        </button>
    ))
    return (
        <div className='container'>
            <div className='tabs-container'>{tabs}</div>
        </div>
    )
};

const Tab = (props) => {
    return <>{props.children}</>
}
 
export {Tab, Tabs};