import React from 'react'

export const ThemeContext = React.createContext<any>({})

// TODO
ThemeContext.displayName = 'ThemeContext'

export const ThemeProvider: React.FC = ({ children }) => {
  return <ThemeContext.Provider value={null}>{children}</ThemeContext.Provider>
}
