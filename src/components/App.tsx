import React, { FC } from 'react';
import ProductList from './ProductList/ProductList';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import ProductPage from './ProductPage/ProductPage';
import { ThemeProvider } from '../context/ThemeContext';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from './ErrorPage/ErrorPage';
import Wrap from './Wrap/Wrap';

const App: FC = () => (
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorPage />}>
      <BrowserRouter>
        <Switch>
          <ThemeProvider>
            <Wrap>
              <Header />
              <Route path="/">
                <Route exact path="/category/:category">
                  <ProductList />
                </Route>
                <Route path="/category/:category/:productId">
                  <ProductPage />
                </Route>
                <Route path="/error">
                  <ErrorPage />
                </Route>
                <Route path="/profile">Профиль</Route>
                <Route path="/saved">Сохраненные</Route>
                <Route path="/cart">Корзина</Route>
              </Route>
            </Wrap>
          </ThemeProvider>
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);

export default App;
