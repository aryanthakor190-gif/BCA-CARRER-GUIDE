const careers = [
  {
    id: 'fullstack',
    icon: '💻',
    title: 'Full Stack Web Development',
    badge: 'Most Popular',
    summary: 'Build complete websites and web applications from start to finish using frontend and backend technologies.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Git'],
    courses: ['Web Development Bootcamp', 'React', 'MERN Stack'],
    platforms: [
      { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/' },
      { name: 'The Odin Project', url: 'https://www.theodinproject.com/' },
      { name: 'Coursera', url: 'https://www.coursera.org/' },
      { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/' }
    ],
    roadmap: [
      { title: 'Learn Core Web Basics', description: 'Start with HTML, CSS, and JavaScript to understand structure, design, and interactivity.' },
      { title: 'Master Frontend Frameworks', description: 'Learn React and state management to build interactive and responsive user interfaces.' },
      { title: 'Learn Backend Development', description: 'Understand Node.js, Express, REST APIs, and authentication to power your applications.' },
      { title: 'Use a Database', description: 'Work with MongoDB or SQL databases to store and fetch app data efficiently.' },
      { title: 'Build Real Projects', description: 'Create portfolio projects such as e-commerce sites, dashboards, or blog platforms.' },
      { title: 'Deploy and Share', description: 'Publish your projects with Vercel, Netlify, or Render and show them in your portfolio.' }
    ],
    jobs: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Web Application Engineer']
  },
  {
    id: 'android',
    icon: '📱',
    title: 'Android App Development',
    badge: 'Mobile',
    summary: 'Create Android applications for phones, tablets, and smart devices using modern tools and frameworks.',
    skills: ['Java', 'Kotlin', 'Android Studio', 'Firebase'],
    courses: ['Android Development', 'Kotlin'],
    platforms: [
      { name: 'Android Developers', url: 'https://developer.android.com/' },
      { name: 'Kotlin Docs', url: 'https://kotlinlang.org/' },
      { name: 'Udacity', url: 'https://www.udacity.com/' },
      { name: 'Coursera', url: 'https://www.coursera.org/' }
    ],
    roadmap: [
      { title: 'Learn Kotlin or Java', description: 'Start with Kotlin basics, variables, functions, and object-oriented programming.' },
      { title: 'Understand Android UI', description: 'Learn XML layouts, ViewModel, fragments, and Material Design components.' },
      { title: 'Use Firebase', description: 'Integrate Firebase for authentication, database, and cloud storage in your apps.' },
      { title: 'Build App Features', description: 'Add navigation, API calls, local storage, and notifications to your application.' },
      { title: 'Test and Publish', description: 'Use Android Studio testing tools and publish your app on the Google Play Store.' }
    ],
    jobs: ['Android Developer', 'Mobile App Developer', 'UI Engineer', 'Android Software Engineer']
  },
  {
    id: 'ios',
    icon: '🍎',
    title: 'iOS App Development',
    badge: 'Apple',
    summary: 'Build apps for iPhones and iPads using Swift and Apple’s development ecosystem.',
    skills: ['Swift', 'Xcode', 'UIKit', 'SwiftUI'],
    courses: ['Swift & iOS Development'],
    platforms: [
      { name: 'Apple Developer', url: 'https://developer.apple.com/' },
      { name: 'Hacking with Swift', url: 'https://www.hackingwithswift.com/' },
      { name: 'Ray Wenderlich', url: 'https://www.raywenderlich.com/' },
      { name: 'Udemy', url: 'https://www.udemy.com/' }
    ],
    roadmap: [
      { title: 'Learn Swift Fundamentals', description: 'Understand variables, loops, arrays, optionals, functions, and classes.' },
      { title: 'Work in Xcode', description: 'Create apps using Xcode, storyboard, and SwiftUI interface design.' },
      { title: 'Build UI Components', description: 'Implement navigation controllers, tab bars, lists, and screen flows.' },
      { title: 'Connect Data', description: 'Fetch API data, save local data, and manage asynchronous tasks.' },
      { title: 'Launch the App', description: 'Test on simulators, fix bugs, and prepare for App Store submission.' }
    ],
    jobs: ['iOS Developer', 'Mobile App Engineer', 'Swift Developer', 'Apple App Engineer']
  },
  {
    id: 'aiml',
    icon: '🤖',
    title: 'Artificial Intelligence & ML',
    badge: 'Future Tech',
    summary: 'Learn how machines analyze data, predict outcomes, and solve problems using AI and ML algorithms.',
    skills: ['Python', 'NumPy', 'Pandas', 'Machine Learning', 'Deep Learning'],
    courses: ['Python', 'ML', 'TensorFlow', 'PyTorch'],
    platforms: [
      { name: 'Kaggle', url: 'https://www.kaggle.com/' },
      { name: 'Google ML Crash Course', url: 'https://developers.google.com/machine-learning/crash-course' },
      { name: 'Fast.ai', url: 'https://www.fast.ai/' },
      { name: 'Coursera', url: 'https://www.coursera.org/' }
    ],
    roadmap: [
      { title: 'Learn Python', description: 'Start with Python basics, libraries, and data handling techniques.' },
      { title: 'Understand Statistics', description: 'Learn mean, median, probability, variance, correlation, and probability distributions.' },
      { title: 'Explore Machine Learning', description: 'Practice supervised and unsupervised learning with scikit-learn.' },
      { title: 'Advance with Deep Learning', description: 'Learn neural networks using TensorFlow or PyTorch.' },
      { title: 'Build a Portfolio', description: 'Create models for image recognition, prediction, or recommendation systems.' }
    ],
    jobs: ['Machine Learning Engineer', 'AI Engineer', 'Data Scientist', 'Computer Vision Engineer']
  },
  {
    id: 'datascience',
    icon: '📊',
    title: 'Data Science',
    badge: 'Analytics',
    summary: 'Turn raw data into insights using statistical analysis, visualization, and business intelligence tools.',
    skills: ['Python', 'SQL', 'Statistics', 'Power BI', 'Tableau'],
    courses: ['Data Analysis', 'Data Science'],
    platforms: [
      { name: 'DataCamp', url: 'https://www.datacamp.com/' },
      { name: 'Kaggle', url: 'https://www.kaggle.com/' },
      { name: 'Microsoft Learn', url: 'https://learn.microsoft.com/' },
      { name: 'Coursera', url: 'https://www.coursera.org/' }
    ],
    roadmap: [
      { title: 'Learn Python and SQL', description: 'Use Python for analysis and SQL for querying data from databases.' },
      { title: 'Understand Statistics', description: 'Learn descriptive analysis, hypothesis testing, and data distributions.' },
      { title: 'Create Visualizations', description: 'Use Power BI, Tableau, or Matplotlib to present insights clearly.' },
      { title: 'Practice with Real Data', description: 'Analyze business, sales, or healthcare datasets from Kaggle.' },
      { title: 'Present Insights', description: 'Prepare dashboards and explain findings in business-friendly language.' }
    ],
    jobs: ['Data Analyst', 'Business Intelligence Analyst', 'Data Scientist', 'Analytics Consultant']
  },
  {
    id: 'cloud',
    icon: '☁️',
    title: 'Cloud Computing',
    badge: 'Infrastructure',
    summary: 'Learn cloud platforms, virtualization, and deployment to build scalable modern systems.',
    skills: ['Linux', 'AWS', 'Azure', 'Docker', 'Kubernetes'],
    courses: ['AWS Cloud Practitioner', 'Azure Fundamentals'],
    platforms: [
      { name: 'AWS Skill Builder', url: 'https://skillbuilder.aws/' },
      { name: 'Azure Learn', url: 'https://learn.microsoft.com/training/azure/' },
      { name: 'Docker Docs', url: 'https://docs.docker.com/' },
      { name: 'Kubernetes', url: 'https://kubernetes.io/docs/home/' }
    ],
    roadmap: [
      { title: 'Learn Linux Basics', description: 'Understand commands, file systems, processes, and package installation.' },
      { title: 'Understand Cloud Concepts', description: 'Learn virtual machines, networking, security groups, and storage.' },
      { title: 'Choose a Cloud Platform', description: 'Study AWS or Azure fundamentals and service categories.' },
      { title: 'Containerize Applications', description: 'Use Docker to package applications into containers.' },
      { title: 'Practice Orchestration', description: 'Deploy containerized applications using Kubernetes and simple CI/CD workflows.' }
    ],
    jobs: ['Cloud Engineer', 'DevOps Engineer', 'Cloud Solutions Architect', 'Site Reliability Engineer']
  },
  {
    id: 'cybersecurity',
    icon: '🔒',
    title: 'Cybersecurity',
    badge: 'Security',
    summary: 'Protect systems, networks, and data by learning ethical hacking, security tools, and defense strategies.',
    skills: ['Networking', 'Linux', 'Ethical Hacking', 'Security'],
    courses: ['CEH Basics', 'Network Security'],
    platforms: [
      { name: 'TryHackMe', url: 'https://tryhackme.com/' },
      { name: 'Cisco Networking Academy', url: 'https://www.netacad.com/' },
      { name: 'Hack The Box', url: 'https://www.hackthebox.com/' },
      { name: 'Cybrary', url: 'https://www.cybrary.it/' }
    ],
    roadmap: [
      { title: 'Learn Networking', description: 'Understand IP, DNS, DHCP, HTTP, routing, and basic network troubleshooting.' },
      { title: 'Study Linux Security', description: 'Use Linux commands, permissions, logs, and secure configuration practices.' },
      { title: 'Practice Ethical Hacking', description: 'Learn reconnaissance, scanning, privilege escalation, and web security basics.' },
      { title: 'Understand Security Tools', description: 'Explore Wireshark, Nmap, Burp Suite, and vulnerability scanners.' },
      { title: 'Build Defense Skills', description: 'Create secure systems, apply patches, and monitor alerts for incidents.' }
    ],
    jobs: ['Security Analyst', 'Penetration Tester', 'Cybersecurity Engineer', 'SOC Analyst']
  },
  {
    id: 'gamedev',
    icon: '🎮',
    title: 'Game Development',
    badge: 'Creative',
    summary: 'Design and build interactive games using industry tools and game engines.',
    skills: ['Unity', 'C#', 'Unreal Engine', 'Game Design'],
    courses: ['Unity Game Development'],
    platforms: [
      { name: 'Unity Learn', url: 'https://learn.unity.com/' },
      { name: 'Unreal Engine', url: 'https://www.unrealengine.com/' },
      { name: 'GameDev.tv', url: 'https://gamedev.tv/' },
      { name: 'Udemy', url: 'https://www.udemy.com/' }
    ],
    roadmap: [
      { title: 'Learn Programming in C#', description: 'Understand variables, loops, functions, classes, and events.' },
      { title: 'Explore a Game Engine', description: 'Start with Unity or Unreal and learn scenes, objects, physics, and animation.' },
      { title: 'Build Core Gameplay', description: 'Create player movement, enemies, scoring, and collisions.' },
      { title: 'Add Art and Audio', description: 'Import assets, set camera views, and improve user experience.' },
      { title: 'Publish a Game', description: 'Polish the game, test it, and release it on a platform or portfolio page.' }
    ],
    jobs: ['Game Developer', 'Gameplay Programmer', 'Unity Developer', 'Game QA Engineer']
  },
  {
    id: 'uiux',
    icon: '🎨',
    title: 'UI/UX Design',
    badge: 'Design',
    summary: 'Design intuitive interfaces and user experiences for websites and applications.',
    skills: ['Figma', 'Adobe XD', 'Design Principles', 'User Research'],
    courses: ['UI/UX Design'],
    platforms: [
      { name: 'Figma', url: 'https://www.figma.com/' },
      { name: 'Interaction Design Foundation', url: 'https://www.interaction-design.org/' },
      { name: 'Adobe XD', url: 'https://www.adobe.com/products/xd.html' },
      { name: 'Coursera', url: 'https://www.coursera.org/' }
    ],
    roadmap: [
      { title: 'Learn Design Fundamentals', description: 'Study color, layout, typography, spacing, and hierarchy.' },
      { title: 'Master Design Tools', description: 'Build wireframes and mockups in Figma or Adobe XD.' },
      { title: 'Understand User Research', description: 'Learn interviews, surveys, user flow, and empathy mapping.' },
      { title: 'Create Interfaces', description: 'Design dashboards, mobile apps, and landing pages with accessibility in mind.' },
      { title: 'Build a Portfolio', description: 'Showcase your process with case studies and before-after redesign examples.' }
    ],
    jobs: ['UI Designer', 'UX Designer', 'Product Designer', 'Interaction Designer']
  },
  {
    id: 'qa',
    icon: '🧪',
    title: 'Software Testing (QA)',
    badge: 'Quality',
    summary: 'Ensure software is reliable, secure, and bug-free using manual and automated testing strategies.',
    skills: ['Manual Testing', 'Selenium', 'Automation', 'Test Cases'],
    courses: ['QA Automation'],
    platforms: [
      { name: 'Selenium', url: 'https://www.selenium.dev/' },
      { name: 'Test Automation University', url: 'https://testautomationu.applitools.com/' },
      { name: 'Guru99', url: 'https://www.guru99.com/' },
      { name: 'Coursera', url: 'https://www.coursera.org/' }
    ],
    roadmap: [
      { title: 'Learn Manual Testing', description: 'Understand test cases, bug reporting, smoke testing, and regression testing.' },
      { title: 'Study SDLC', description: 'Learn how testing fits into waterfall, agile, and DevOps projects.' },
      { title: 'Practice Automation', description: 'Use Selenium or Cypress to automate basic web testing flows.' },
      { title: 'Learn API Testing', description: 'Test REST APIs with tools like Postman and write validations.' },
      { title: 'Create a Test Portfolio', description: 'Document test plans, test scenarios, and bug reports for portfolio reviews.' }
    ],
    jobs: ['QA Engineer', 'Software Tester', 'Automation Tester', 'Quality Analyst']
  },
  {
    id: 'devops',
    icon: '📈',
    title: 'DevOps',
    badge: 'Automation',
    summary: 'Bridge development and operations with automation, deployment pipelines, and infrastructure management.',
    skills: ['Linux', 'Git', 'Docker', 'Kubernetes', 'CI/CD'],
    courses: ['DevOps Engineer Roadmap'],
    platforms: [
      { name: 'GitHub Actions', url: 'https://github.com/features/actions' },
      { name: 'Docker Docs', url: 'https://docs.docker.com/' },
      { name: 'Kubernetes', url: 'https://kubernetes.io/docs/home/' },
      { name: 'Linux Foundation', url: 'https://www.linuxfoundation.org/' }
    ],
    roadmap: [
      { title: 'Master Git and Linux', description: 'Practice version control, branching, shell commands, and scripting.' },
      { title: 'Learn Containers', description: 'Use Docker to create, run, and manage containerized applications.' },
      { title: 'Understand CI/CD', description: 'Set up automated builds, tests, and deployments with GitHub Actions or Jenkins.' },
      { title: 'Learn Orchestration', description: 'Deploy apps with Kubernetes and manage scaling and health checks.' },
      { title: 'Monitor Systems', description: 'Use logging and monitoring tools to troubleshoot production issues.' }
    ],
    jobs: ['DevOps Engineer', 'Release Engineer', 'Cloud DevOps Engineer', 'Platform Engineer']
  },
  {
    id: 'database',
    icon: '🗄️',
    title: 'Database Administration',
    badge: 'Data',
    summary: 'Manage data storage, backups, optimization, and security for relational and non-relational systems.',
    skills: ['SQL', 'MySQL', 'PostgreSQL', 'Oracle'],
    courses: ['SQL & Database Management'],
    platforms: [
      { name: 'SQLBolt', url: 'https://sqlbolt.com/' },
      { name: 'PostgreSQL Docs', url: 'https://www.postgresql.org/docs/' },
      { name: 'MySQL Docs', url: 'https://dev.mysql.com/doc/' },
      { name: 'Oracle', url: 'https://www.oracle.com/database/' }
    ],
    roadmap: [
      { title: 'Learn SQL Basics', description: 'Understand SELECT, WHERE, GROUP BY, ORDER BY, DISTINCT, and JOINs.' },
      { title: 'Work with a Database', description: 'Create tables, insert data, and write queries for real scenarios.' },
      { title: 'Learn Administration', description: 'Understand users, permissions, backups, indexes, and database security.' },
      { title: 'Optimize Performance', description: 'Use queries, indexing, and normalization to improve database speed.' },
      { title: 'Practice in Projects', description: 'Build student management, inventory, or billing systems with structured data.' }
    ],
    jobs: ['Database Administrator', 'SQL Developer', 'Data Engineer', 'Database Analyst']
  },
  {
    id: 'backend',
    icon: '🖥️',
    title: 'Backend Development',
    badge: 'Server',
    summary: 'Build the server-side logic, APIs, and systems that power modern applications.',
    skills: ['Java', 'Spring Boot', 'Node.js', 'Django'],
    courses: ['Spring Boot', 'Django'],
    platforms: [
      { name: 'Spring', url: 'https://spring.io/projects/spring-boot' },
      { name: 'Django', url: 'https://www.djangoproject.com/' },
      { name: 'Node.js', url: 'https://nodejs.org/' },
      { name: 'Postman', url: 'https://www.postman.com/' }
    ],
    roadmap: [
      { title: 'Learn Programming Fundamentals', description: 'Get comfortable with variables, control flow, functions, and object-oriented concepts.' },
      { title: 'Study Backend Frameworks', description: 'Explore Spring Boot, Django, or Express for building APIs.' },
      { title: 'Create APIs', description: 'Build REST endpoints, manage request validation, and structure controllers.' },
      { title: 'Handle Authentication', description: 'Implement login, session management, JWT, and role-based access control.' },
      { title: 'Deploy Services', description: 'Publish backend services with cloud hosting and connect them to frontend apps.' }
    ],
    jobs: ['Backend Developer', 'Java Developer', 'API Engineer', 'Server-Side Engineer']
  },
  {
    id: 'frontend',
    icon: '🌐',
    title: 'Frontend Development',
    badge: 'Interface',
    summary: 'Create the visual and interactive parts of websites and apps that users see and use.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
    courses: ['Frontend Bootcamp'],
    platforms: [
      { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/' },
      { name: 'React Docs', url: 'https://react.dev/' },
      { name: 'Next.js', url: 'https://nextjs.org/' },
      { name: 'Frontend Mentor', url: 'https://www.frontendmentor.io/' }
    ],
    roadmap: [
      { title: 'Learn HTML and CSS', description: 'Build static pages with semantic markup, layouts, and modern styling.' },
      { title: 'Master JavaScript', description: 'Learn functions, events, DOM manipulation, and asynchronous coding.' },
      { title: 'Use React', description: 'Practice component design, props, hooks, and reusable UI patterns.' },
      { title: 'Learn Next.js', description: 'Understand routing, server-side rendering, and production-grade frontend architecture.' },
      { title: 'Build Portfolio Pages', description: 'Create responsive websites, dashboards, and UI clones for your portfolio.' }
    ],
    jobs: ['Frontend Developer', 'React Developer', 'UI Engineer', 'Website Designer']
  },
  {
    id: 'blockchain',
    icon: '🔗',
    title: 'Blockchain Development',
    badge: 'Emerging',
    summary: 'Learn decentralized applications, smart contracts, and blockchain-based financial systems.',
    skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3'],
    courses: ['Blockchain Development'],
    platforms: [
      { name: 'Ethereum.org', url: 'https://ethereum.org/en/' },
      { name: 'CryptoZombies', url: 'https://cryptozombies.io/' },
      { name: 'Solidity Docs', url: 'https://docs.soliditylang.org/' },
      { name: 'OpenZeppelin', url: 'https://www.openzeppelin.com/' }
    ],
    roadmap: [
      { title: 'Understand Blockchain Basics', description: 'Learn how blocks, transactions, wallets, and consensus work.' },
      { title: 'Learn Solidity', description: 'Write smart contracts with variables, functions, modifiers, and events.' },
      { title: 'Practice on Ethereum', description: 'Deploy and test contracts on test networks such as Sepolia.' },
      { title: 'Build DApps', description: 'Connect smart contracts with frontend applications using Web3 libraries.' },
      { title: 'Secure and Audit', description: 'Study common vulnerabilities and best practices for contract safety.' }
    ],
    jobs: ['Blockchain Developer', 'Smart Contract Developer', 'Web3 Engineer', 'Blockchain Analyst']
  }
];

const STORAGE_KEY = 'bca-career-progress';
const careerGrid = document.getElementById('careerGrid');
const roadmapPanel = document.getElementById('roadmapPanel');
const careerSelect = document.getElementById('careerSelect');
const stepList = document.getElementById('stepList');
const progressLabel = document.getElementById('progressLabel');
const progressFill = document.getElementById('progressFill');
const resetProgressButton = document.getElementById('resetProgress');
const recommendButton = document.getElementById('recommendButton');
const recommendationResult = document.getElementById('recommendationResult');
const interestSelect = document.getElementById('interestSelect');
const workStyleSelect = document.getElementById('workStyleSelect');
const goalSelect = document.getElementById('goalSelect');

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getCompletedSteps(pathId) {
  const stored = loadProgress();
  return stored[pathId] || [];
}

function renderCareerCards() {
  careerGrid.innerHTML = careers
    .map(
      (career) => `
      <article class="career-card" data-career="${career.id}">
        <div class="career-top">
          <span class="career-icon" aria-hidden="true">${career.icon}</span>
          <span class="badge">${career.badge}</span>
        </div>
        <h3>${career.title}</h3>
        <p>${career.summary}</p>
        <div class="skills-list">
          ${career.skills.map((skill) => `<span class="skill-pill">${skill}</span>`).join('')}
        </div>
        <div class="card-footer">
          <strong>Jobs: ${career.jobs.slice(0, 2).join(', ')}</strong>
          <button class="card-button" data-select="${career.id}" type="button">View Roadmap →</button>
        </div>
      </article>
    `
    ).join('');

  document.querySelectorAll('[data-select]').forEach((button) => {
    button.addEventListener('click', () => {
      const careerId = button.getAttribute('data-select');
      selectCareer(careerId);
      document.getElementById('roadmaps').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function renderCareerOptions() {
  careerSelect.innerHTML = careers
    .map((career) => `<option value="${career.id}" ${career.id === 'fullstack' ? 'selected' : ''}>${career.title}</option>`)
    .join('');
}

function renderRoadmap(career) {
  roadmapPanel.innerHTML = `
    <div class="roadmap-top">
      <div>
        <p class="eyebrow">${career.badge}</p>
        <h3>${career.title}</h3>
      </div>
    </div>
    <div class="roadmap-meta">
      ${career.skills.map((skill) => `<span class="skill-pill">${skill}</span>`).join('')}
    </div>
    <div class="roadmap-steps">
      ${career.roadmap
        .map(
          (step, index) => `
          <div class="roadmap-step">
            <span>${index + 1}</span>
            <h4>${step.title}</h4>
            <p>${step.description}</p>
          </div>
        `
        )
        .join('')}
    </div>
    <div class="platform-section">
      <h4>Recommended Platforms</h4>
      <div class="platform-list">
        ${career.platforms
          .map((platform) => `<span class="platform-pill"><a href="${platform.url}" target="_blank" rel="noreferrer">${platform.name}</a></span>`)
          .join('')}
      </div>
    </div>
    <div class="job-section">
      <h4>Career Outcomes</h4>
      <div class="outcome-list">
        ${career.jobs.map((job) => `<span class="outcome-pill">${job}</span>`).join('')}
      </div>
    </div>
  `;
}

function renderTracker(careerId) {
  const career = careers.find((item) => item.id === careerId);
  const completed = getCompletedSteps(careerId);
  const total = career.roadmap.length;
  const percent = total === 0 ? 0 : Math.round((completed.length / total) * 100);

  progressLabel.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;

  stepList.innerHTML = career.roadmap
    .map((step, index) => {
      const checked = completed.includes(index) ? 'checked' : '';
      return `
        <li class="step-item">
          <label class="step-label">
            <input type="checkbox" data-step-index="${index}" ${checked} />
            <span>
              <strong>${step.title}</strong>
            </span>
          </label>
          <p>${step.description}</p>
        </li>
      `;
    })
    .join('');

  document.querySelectorAll('input[data-step-index]').forEach((input) => {
    input.addEventListener('change', () => {
      const index = Number(input.getAttribute('data-step-index'));
      const progress = loadProgress();
      const current = progress[careerId] || [];
      const next = input.checked ? [...new Set([...current, index])] : current.filter((value) => value !== index);
      progress[careerId] = next;
      saveProgress(progress);
      renderTracker(careerId);
    });
  });
}

function getRecommendedCareer() {
  const interest = interestSelect.value;
  const workStyle = workStyleSelect.value;
  const goal = goalSelect.value;

  const rules = {
    web: 'fullstack',
    mobile: workStyle === 'creative' ? 'ios' : 'android',
    data: 'datascience',
    cloud: 'cloud',
    security: 'cybersecurity',
    design: 'uiux',
    games: 'gamedev'
  };

  if (goal === 'research') {
    return interest === 'data' ? 'aiml' : 'datascience';
  }

  if (goal === 'security') {
    return 'cybersecurity';
  }

  if (goal === 'startup') {
    return 'fullstack';
  }

  if (goal === 'portfolio' && interest === 'design') {
    return 'uiux';
  }

  if (workStyle === 'analysis') {
    return 'datascience';
  }

  if (workStyle === 'systems') {
    return 'devops';
  }

  if (workStyle === 'testing') {
    return 'qa';
  }

  return rules[interest] || 'fullstack';
}

function showRecommendation() {
  const careerId = getRecommendedCareer();
  const career = careers.find((item) => item.id === careerId);
  const firstStep = career.roadmap[0];

  recommendationResult.hidden = false;
  recommendationResult.innerHTML = `
    <h3>Best Match: ${career.title}</h3>
    <p>${career.summary}</p>
    <p><strong>Suggested first step:</strong> ${firstStep.title}</p>
    <ul>
      <li>Recommended skills: ${career.skills.join(', ')}</li>
      <li>Top platforms: ${career.platforms.slice(0, 3).map((platform) => platform.name).join(', ')}</li>
      <li>Likely career outcome: ${career.jobs[0]}</li>
    </ul>
    <button class="btn btn-secondary" type="button" data-open-career="${career.id}">Open this roadmap</button>
  `;

  recommendationResult.querySelector('[data-open-career]').addEventListener('click', () => {
    selectCareer(career.id);
    document.getElementById('roadmaps').scrollIntoView({ behavior: 'smooth' });
  });
}

function selectCareer(careerId) {
  const career = careers.find((item) => item.id === careerId);
  if (!career) return;
  careerSelect.value = careerId;
  renderRoadmap(career);
  renderTracker(careerId);
}

renderCareerCards();
renderCareerOptions();
selectCareer('fullstack');

careerSelect.addEventListener('change', (event) => {
  selectCareer(event.target.value);
});

recommendButton.addEventListener('click', showRecommendation);

resetProgressButton.addEventListener('click', () => {
  const selectedCareer = careerSelect.value;
  const progress = loadProgress();
  progress[selectedCareer] = [];
  saveProgress(progress);
  renderTracker(selectedCareer);
});
