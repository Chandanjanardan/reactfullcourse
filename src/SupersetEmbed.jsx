import { embedDashboard } from "@superset-ui/embedded-sdk";
import { useEffect } from "react";

const SupersetEmbed = () => {
  useEffect(() => {
    async function loadDashboard() {
      const fetchGuestToken = async () => {
        const response = await fetch("http://localhost:8088/api/v1/security/guest_token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6dHJ1ZSwiaWF0IjoxNzI5NTEwNTAzLCJqdGkiOiJlMDIzOWFmMC02N2JmLTQ1YWMtYWY4Ni1iM2RhZjM2OWIxNjQiLCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoxLCJuYmYiOjE3Mjk1MTA1MDMsImNzcmYiOiI1OTdiYjFlMS1hODY4LTRiNDItYjkyOC1lM2Q2M2NiNmNjZjQiLCJleHAiOjE3Mjk1MTE0MDN9.l2dn7aNDryogVoRi91vDj3reoiCdGGRDc0mqSJMIKrg", // Replace <admin_token> with your access token
          },
          body: JSON.stringify({
            user: { username: "admin" },
            resources: [{ type: "dashboard", id: "311" }],
          }),
        });

        const data = await response.json();
        return data.token;
      };

      embedDashboard({
        id: "311", // Replace with the actual dashboard ID
        supersetDomain: "http://localhost:8088",
        mountPoint: document.getElementById("superset-container"),
        fetchGuestToken,
      });
    }

    loadDashboard();
  }, []);

  return <div id="superset-container" style={{ height: "100vh", width: "100%" }} />;
};

export default SupersetEmbed;
