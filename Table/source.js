    const API_URL = "https://jsonplaceholder.typicode.com/users";
    const tableBody = document.getElementById("userTableBody");
    const searchInput = document.getElementById("searchInput");
    const filterType = document.getElementById("filterType");
    const filterValue = document.getElementById("filterValue");
    const loadBtn = document.getElementById("loadBtn");
    const resetBtn = document.getElementById("resetBtn");

    let usersData = [];
    let currentSort = { key: null, direction: "asc" };

    // Fetch Data
    async function fetchUsers() {
      tableBody.innerHTML = `<tr><td colspan="5" class="no-data">Loading...</td></tr>`;
      try {
        const res = await fetch(API_URL);
        usersData = await res.json();
        renderTable(usersData);

        // Enable controls
        searchInput.disabled = false;
        filterType.disabled = false;
        resetBtn.disabled = false;
        loadBtn.disabled = true;
        loadBtn.textContent = "Users Loaded";
      } catch (error) {
        tableBody.innerHTML = `<tr><td colspan="5" class="no-data">Error loading data</td></tr>`;
      }
    }

    // Render Table
    function renderTable(data) {
      if (data.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" class="no-data">No results found</td></tr>`;
        return;
      }

      tableBody.innerHTML = data.map(user => `
        <tr>
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>${user.company.name}</td>
        </tr>
      `).join("");
    }

    // Apply Filters + Search + Sorting
    function applyFilters() {
      let filtered = [...usersData];

      // Search filter
      const searchText = searchInput.value.toLowerCase();
      if (searchText) {
        filtered = filtered.filter(user =>
          user.name.toLowerCase().includes(searchText) ||
          user.email.toLowerCase().includes(searchText)
        );
      }

      // Custom filter
      const type = filterType.value;
      const value = filterValue.value;
      if (type && value) {
        filtered = filtered.filter(user => {
          if (type === "company") return user.company.name === value;
          if (type === "city") return user.address.city === value;
          if (type === "website") return user.website === value;
          return true;
        });
      }

      // Sorting
      if (currentSort.key) {
        filtered.sort((a, b) => {
          let valA, valB;
          if (currentSort.key === "company") {
            valA = a.company.name.toLowerCase();
            valB = b.company.name.toLowerCase();
          } else {
            valA = a[currentSort.key].toLowerCase();
            valB = b[currentSort.key].toLowerCase();
          }
          if (valA < valB) return currentSort.direction === "asc" ? -1 : 1;
          if (valA > valB) return currentSort.direction === "asc" ? 1 : -1;
          return 0;
        });
      }

      renderTable(filtered);
    }

    // Populate Filter Values dynamically
    function populateFilterValues(type) {
      filterValue.innerHTML = `<option value="">All</option>`;
      if (!type) return;

      let values = [];
      if (type === "company") {
        values = [...new Set(usersData.map(u => u.company.name))];
      } else if (type === "city") {
        values = [...new Set(usersData.map(u => u.address.city))];
      } else if (type === "website") {
        values = [...new Set(usersData.map(u => u.website))];
      }

      values.forEach(v => {
        const option = document.createElement("option");
        option.value = v;
        option.textContent = v;
        filterValue.appendChild(option);
      });

      filterValue.disabled = false;
    }

    // Handle Sorting
    function handleSort(e) {
      const th = e.target;
      const key = th.dataset.key;

      if (!key) return;

      if (currentSort.key === key) {
        currentSort.direction = currentSort.direction === "asc" ? "desc" : "asc";
      } else {
        currentSort.key = key;
        currentSort.direction = "asc";
      }

      // Update header classes
      document.querySelectorAll("th.sortable").forEach(h => h.classList.remove("sorted-asc", "sorted-desc"));
      th.classList.add(currentSort.direction === "asc" ? "sorted-asc" : "sorted-desc");

      applyFilters();
    }

    // Reset All
    function resetAll() {
      searchInput.value = "";
      filterType.value = "";
      filterValue.innerHTML = `<option value="">All</option>`;
      filterValue.disabled = true;

      currentSort = { key: null, direction: "asc" };
      document.querySelectorAll("th.sortable").forEach(h => h.classList.remove("sorted-asc", "sorted-desc"));

      renderTable(usersData);
    }

    // Event Listeners
    loadBtn.addEventListener("click", fetchUsers);
    searchInput.addEventListener("input", applyFilters);
    filterType.addEventListener("change", (e) => populateFilterValues(e.target.value));
    filterValue.addEventListener("change", applyFilters);
    document.querySelectorAll("th.sortable").forEach(th => th.addEventListener("click", handleSort));
    resetBtn.addEventListener("click", resetAll);
