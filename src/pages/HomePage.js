import React from 'react';
import {Calendar} from '../components';
import {Outlet} from 'react-router-dom';

export default function HomePage() {
    return (
        <div>
            HomePage
            <Calendar />
            <Outlet />
        </div>
    );
}
