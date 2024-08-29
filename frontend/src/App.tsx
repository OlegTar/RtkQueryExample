import logo from "./logo.svg";

import styles from "./App.module.scss";
import { Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { ProviderSimple } from "./01-GuestBookSimple/providerSimple";
import { ProviderToolkit } from "./02-GuestBookReduxToolkit/providerReduxToolkit";
import { ProviderSimpleRequests } from "./03-GuestBookSimpleRequests/components/providerSimpleRequests";
import { ProviderReduxToolkitRequests } from "./04-GuestBookReduxToolkitRequests/components/providerReduxToolkitRequests";
import { ProviderRTKQuery } from "./05-GuestBookRTKQuery/components/providerRTKQuery";
import { ProviderRTKQueryPesimisticOptimistic } from "./06-GuestBookRTKQuery_Pesimistic_Optimistic/components/ProviderRTKQueryPesimisticOptimistic";
import { ProviderRTKQueryTags } from "./07-GuestBookRTKQuery_Tags/components/ProviderRTKQueryPesimisticOptimistic";

function App() {
	return (
		<BrowserRouter>
			<div className="content">
				<Link to={"/guestbook_simple"}>[simple redux]</Link>&nbsp;
				<Link to={"/guestbook_toolkit"}>[redux-toolkit]</Link>&nbsp;
				<Link to={"/guestbook_simple_requests"}>[simple-redux-requests]</Link>
				&nbsp;
				<Link to={"/guestbook_toolkit_requests"}>[redux-toolkit-requests]</Link>
				&nbsp;
				<Link to={"/guestbook_rtkquery"}>[rtk query]</Link>&nbsp;
				<Link to={"/guestbook_rtkquery_pesimistic_optimistic"}>
					[rtk query pesimistic optimistic]
				</Link>
				<Link to={"/guestbook_rtkquery_tags"}>[rtk query tags]</Link>
				&nbsp;
				<Routes>
					<Route path="/guestbook_simple" element={<ProviderSimple />}></Route>
					<Route
						path="/guestbook_toolkit"
						element={<ProviderToolkit />}
					></Route>
					<Route
						path="/guestbook_simple_requests"
						element={<ProviderSimpleRequests />}
					></Route>
					<Route
						path="/guestbook_toolkit_requests"
						element={<ProviderReduxToolkitRequests />}
					></Route>
					<Route
						path="/guestbook_rtkquery"
						element={<ProviderRTKQuery />}
					></Route>
					<Route
						path="/guestbook_rtkquery_pesimistic_optimistic"
						element={<ProviderRTKQueryPesimisticOptimistic />}
					></Route>
					<Route
						path="/guestbook_rtkquery_tags"
						element={<ProviderRTKQueryTags />}
					></Route>
				</Routes>
			</div>

			{/* <div className={styles.test}>
				<div className={"main"}>
					<header className={styles["App-header"]}>
						<img src={logo} className={styles["App-header"]} alt="logo" />
						<p>
							Edit <code>src/App.tsx</code> and save to reload.
						</p>
						<a
							className={styles["App-link"]}
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn React
						</a>
					</header>
				</div>
			</div> */}
		</BrowserRouter>
	);
}

export default App;
