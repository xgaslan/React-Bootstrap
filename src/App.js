import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Pages from "./Pages/index";

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Pages.Home} />
                    <Route path="/heading-text" component={Pages.HeadingText} />
                    <Route
                        path="/border-shadow"
                        component={Pages.BorderShadow}
                    />
                    <Route path="/color" component={Pages.Color} />
                    <Route
                        path="/margin-padding"
                        component={Pages.MarginPadding}
                    />
                    <Route path="/example-1" component={Pages.Example1} />
                    <Route
                        path="/alignments-display"
                        component={Pages.AlignmentsDisplay}
                    />
                    <Route
                        path="/tables-sizing"
                        component={Pages.TablesSizing}
                    />
                    <Route path="/breakpoints" component={Pages.Breakpoints} />
                    <Route path="/buttons" component={Pages.Buttons} />
                    <Route
                        path="/button-groups"
                        component={Pages.ButtonGroups}
                    />
                    <Route
                        path="/form-controls"
                        component={Pages.FormControls}
                    />
                    <Route
                        path="/check-range"
                        component={Pages.CheckRange}
                    />
                </Switch>
            </Router>
        </>
    );
};

export default App;
