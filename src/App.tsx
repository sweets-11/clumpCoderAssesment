import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/Appslidebar"
import { Home } from "./pages/Home";
import List from "./pages/List";
const App = () => {
  return (
    <Router>
      <div className="flex">
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger className="lg:hidden" />
        </SidebarProvider>

        <div className="flex-1">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks/list" element={<List />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};
export default App