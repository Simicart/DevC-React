import React from 'react'
import Abstract from './Abstract'

class Icon extends Abstract {
    render() {
        return (
            <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 className={this.className}
                 viewBox="0 0 512 512" style={this.style}>
                <circle style={{fill:'#D3D3D3'}} cx="256" cy="256" r="256"/>
                <g>
                    <g>
                        <path style={{fill:'#FFFFFF'}} d="M442.1,180.5l-60.2-84.3c-2.4-3.1-6-5.1-9.9-5.1H131c-3.9,0-7.5,1.9-9.9,5.1l-60.2,84.3
			c-0.7,2.2-1.4,4.3-2.2,6.5c-0.2,26.7,21.4,48.7,48.2,48.7c14.5,0,27.2-6.3,36.1-16.4c8.9,10.1,21.7,16.4,36.1,16.4
			c14.5,0,27.2-6.3,36.1-16.4c8.9,10.1,21.7,16.4,36.1,16.4c14.5,0,27.2-6.3,36.1-16.4c8.9,10.1,21.7,16.4,36.1,16.4
			c14.5,0,27.2-6.3,36.1-16.4c8.9,10.1,21.7,16.4,36.1,16.4c26.7,0,48.4-21.9,48.2-48.7C443.5,184.8,442.8,182.7,442.1,180.5z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path style={{fill:'#FFFFFF'}} d="M396.1,259.8c-12.8,0-25.3-3.4-36.1-9.7c-21.8,12.6-50.5,12.6-72.3,0c-21.8,12.6-50.5,12.6-72.3,0
			c-21.8,12.6-50.5,12.6-72.3,0c-18.1,10.5-40.5,11.9-60.2,5v125.2c0,13.3,10.8,24.1,24.1,24.1h192.8V283.9H372v120.5h24.1
			c13.3,0,24.1-10.8,24.1-24.1V255.4C412.5,258.1,404.4,259.8,396.1,259.8z M227.4,356.1H131v-72.3h96.4V356.1z"/>
                    </g>
                </g>
            </svg>
        )
    }

}

export default Icon;

