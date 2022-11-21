import {NavigationContainer} from "@react-navigation/native"
import { AppRoutes } from "./app.routes"
import * as React from 'react'



export function Routes(){
  return (
    <NavigationContainer>
      <AppRoutes/> 
    </NavigationContainer>
  )
}