import React, { useEffect } from 'react';
import LogIn from  'src/components/ui/login';
import SignIn from 'src/components/ui/signin';
const UserPage = () => {
    return (
       <React.Fragment>
       <LogIn/>
       <SignIn/>
       </React.Fragment>
    )
}

export default UserPage;