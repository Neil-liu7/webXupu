// ----------------------------------------
// JavaScript 功能部分
// ----------------------------------------

// 1. 移动端导航菜单切换
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('main-nav');

mobileMenu.addEventListener('click', function() {
  this.classList.toggle('active');
  navList.classList.toggle('active');
});

// 2. 轮播图功能
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.carousel-indicators span');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let carouselInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    indicators[i].classList.remove('active');
  });

  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides[currentSlide].classList.add('active');
  indicators[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function startCarousel() {
  carouselInterval = setInterval(nextSlide, 5000); // 自动切换时间
}

nextBtn.addEventListener('click', () => {
  clearInterval(carouselInterval);
  nextSlide();
  startCarousel();
});

prevBtn.addEventListener('click', () => {
  clearInterval(carouselInterval);
  prevSlide();
  startCarousel();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    clearInterval(carouselInterval);
    showSlide(index);
    startCarousel();
  });
});

// 确保页面加载时第一张图显示并启动轮播
showSlide(currentSlide);
startCarousel();

// 3. 成员和成果数据（简化版，用于演示弹窗）
const data = {
  members: {
    'member1': {
      name: '张三',
      role: '项目负责人',
      bio: '张三在乡村振兴领域有丰富的项目管理经验，擅长整合资源，推动项目落地。',
      photo: 'https://via.placeholder.com/140/5d2b8b/FFFFFF?text=张'
    },
    'member2': {
      name: '李四',
      role: '技术指导',
      bio: '李四专注于智慧农业和生态环境技术，为工作站提供专业技术支持。',
      photo: 'https://via.placeholder.com/140/e54b4b/FFFFFF?text=李'
    },
    'member3': {
      name: '王五',
      role: '设计骨干',
      bio: '王五是建筑与景观设计专家，致力于传统村落的现代化改造与保护。',
      photo: 'https://via.placeholder.com/140/2c3e50/FFFFFF?text=王'
    },
    'member4': {
      name: '赵六',
      role: '宣传专员',
      bio: '赵六负责新媒体运营和品牌推广，提升工作站的社会影响力。',
      photo: 'https://via.placeholder.com/140/7f8c8d/FFFFFF?text=赵'
    },
    'member5': {
      name: '孙七',
      role: '调研分析师',
      bio: '孙七擅长社会调研和数据分析，为项目提供扎实的理论依据。',
      photo: 'https://via.placeholder.com/140/f8f9fa/5d2b8b?text=孙'
    },
    'member6': {
      name: '周八',
      role: '基层协调员',
      bio: '周八负责与当地村民和政府沟通协调，确保项目顺利实施。',
      photo: 'https://via.placeholder.com/140/5d2b8b/FFFFFF?text=周'
    },
    'member7': {
      name: '吴九',
      role: '志愿者',
      bio: '吴九是热心公益的志愿者，积极参与各项活动，为乡村建设贡献力量。',
      photo: 'https://via.placeholder.com/140/e54b4b/FFFFFF?text=吴'
    }
  },
  achievements: {
    'project1': {
      title: '智慧农业示范基地',
      phase: '第一期',
      description: '该项目旨在引入先进的物联网技术和大数据分析，监测农田环境，优化种植过程，显著提升了农作物的产量和质量。',
      image: 'https://via.placeholder.com/800x400/5d2b8b/FFFFFF?text=智慧农业示范基地',
      extra: '<h4>项目详情</h4><p>通过部署传感器网络，实现对土壤湿度、温度、光照等数据的实时监控。结合清华大学的科研成果，开发了智能灌溉系统和病虫害预警模型，帮助当地农民实现精准化农业管理。</p><ul><li>投资金额：50万元</li><li>实施周期：6个月</li><li>受益人数：120户农民</li></ul>'
    },
    'project2': {
      title: '乡村旅游路线开发',
      phase: '第一期',
      description: '我们规划并建设了多条具有地方特色的乡村旅游路线，深度融合自然风光和人文历史，有效带动了当地旅游经济的发展。',
      image: 'https://via.placeholder.com/800x400/e54b4b/FFFFFF?text=乡村旅游路线开发',
      extra: '<h4>项目详情</h4><p>开发了“文化体验”、“生态康养”、“红色旅游”等多种主题路线。通过培训当地导游，提升服务水平，打造了独具魅力的旅游品牌。</p><ul><li>路线数量：5条</li><li>新增就业岗位：30个</li><li>游客增长率：25%</li></ul>'
    },
    'project3': {
      title: '传统村落活化保护',
      phase: '第二期',
      description: '在保护传统建筑风貌的基础上，对古建筑进行修缮和功能活化，传承非物质文化遗产，促进文化与旅游的结合。',
      image: 'https://via.placeholder.com/800x400/2c3e50/FFFFFF?text=传统村落活化保护',
      extra: '<h4>项目详情</h4><p>与地方文保单位合作，对村落历史文化资源进行普查和数字化保护。修缮了三处重点古建筑，并将其改造为文化展览馆和民宿。</p><ul><li>保护建筑数量：8处</li><li>文化活动举办次数：10次</li><li>投入资金：20万元</li></ul>'
    },
    'project4': {
      title: '教育帮扶与人才培养',
      phase: '第二期',
      description: '通过开展支教、奖学金和技能培训等活动，提升乡村教育水平，为乡村培养具备创新能力和实践精神的青年人才。',
      image: 'https://via.placeholder.com/800x400/7f8c8d/FFFFFF?text=教育帮扶与人才培养',
      extra: '<h4>项目详情</h4><p>建立了长期支教基地，清华大学志愿者定期前往乡村学校开展课程辅导和素质拓展。同时，面向当地青年开展了电商、农业技术等实用技能培训。</p><ul><li>支教志愿者人数：50人</li><li>培训课程数量：15门</li><li>受助学生人数：300人</li></ul>'
    },
    'project5': {
      title: '生态农业循环经济',
      phase: '第三期',
      description: '推广有机种植和生态养殖，建立农作物秸秆循环利用机制，构建绿色可持续农业系统。',
      image: 'https://via.placeholder.com/800x400/f8f9fa/5d2b8b?text=生态农业循环经济',
      extra: ''
    },
    'project6': {
      title: '乡村医疗健康服务',
      phase: '第三期',
      description: '引进远程医疗技术，改善基层医疗条件，提升乡村居民的健康保障水平。',
      image: 'https://via.placeholder.com/800x400/5d2b8b/FFFFFF?text=乡村医疗健康服务',
      extra: ''
    },
    'design1': {
      title: '村落景观规划设计',
      phase: '第一期',
      description: '为多个村落提供整体景观提升方案。',
      image: 'https://via.placeholder.com/800x400/e54b4b/FFFFFF?text=设计成果1',
      extra: ''
    },
    'design2': {
      title: '农产品包装设计',
      phase: '第二期',
      description: '提升当地特色农产品品牌形象。',
      image: 'https://via.placeholder.com/800x400/5d2b8b/FFFFFF?text=设计成果2',
      extra: ''
    },
    'design3': {
      title: '民宿建筑改造设计',
      phase: '第二期',
      description: '将废弃农房改造为具有地方特色的精品民宿。',
      image: 'https://via.placeholder.com/800x400/2c3e50/FFFFFF?text=设计成果3',
      extra: ''
    },
    'design4': {
      title: '乡村公共空间设计',
      phase: '第三期',
      description: '设计儿童游乐区、文化广场等公共空间。',
      image: 'https://via.placeholder.com/800x400/7f8c8d/FFFFFF?text=设计成果4',
      extra: ''
    },
    'design5': {
      title: '文创产品研发设计',
      phase: '第三期',
      description: '结合当地文化元素，开发系列文创商品。',
      image: 'https://via.placeholder.com/800x400/f8f9fa/5d2b8b?text=设计成果5',
      extra: ''
    },
    'design6': {
      title: '乡村导视系统设计',
      phase: '第四期',
      description: '优化乡村道路标识和旅游导览系统。',
      image: 'https://via.placeholder.com/800x400/e54b4b/FFFFFF?text=设计成果6',
      extra: ''
    },
    'propaganda1': {
      title: '乡村振兴纪录片',
      phase: '第一期',
      description: '制作反映工作站实践历程的纪录片。',
      image: 'https://via.placeholder.com/800x400/2c3e50/FFFFFF?text=宣传成果1',
      extra: ''
    },
    'propaganda2': {
      title: '地方文化宣传册',
      phase: '第一期',
      description: '设计并发行溆浦文化旅游宣传册。',
      image: 'https://via.placeholder.com/800x400/5d2b8b/FFFFFF?text=宣传成果2',
      extra: ''
    },
    'propaganda3': {
      title: '新媒体运营策略',
      phase: '第二期',
      description: '协助当地政府搭建并运营新媒体平台。',
      image: 'https://via.placeholder.com/800x400/e54b4b/FFFFFF?text=宣传成果3',
      extra: ''
    },
    'propaganda4': {
      title: '乡村故事征集与出版',
      phase: '第二期',
      description: '挖掘乡村故事，出版口述历史文集。',
      image: 'https://via.placeholder.com/800x400/7f8c8d/FFFFFF?text=宣传成果4',
      extra: ''
    },
    'propaganda5': {
      title: '主题摄影展策划',
      phase: '第三期',
      description: '举办以乡村振兴为主题的摄影展览。',
      image: 'https://via.placeholder.com/800x400/f8f9fa/5d2b8b?text=宣传成果5',
      extra: ''
    },
    'propaganda6': {
      title: '社区活动推广方案',
      phase: '第三期',
      description: '为乡村文化活动提供宣传推广方案。',
      image: 'https://via.placeholder.com/800x400/5d2b8b/FFFFFF?text=宣传成果6',
      extra: ''
    },
    'report1': {
      title: '乡村产业发展潜力报告',
      phase: '第一期',
      description: '深入分析当地产业现状与发展潜力。',
      image: 'https://via.placeholder.com/800x400/7f8c8d/FFFFFF?text=调研报告1',
      extra: ''
    },
    'report2': {
      title: '农村人居环境现状调研',
      phase: '第一期',
      description: '评估乡村居住环境，提出改善建议。',
      image: 'https://via.placeholder.com/800x400/5d2b8b/FFFFFF?text=调研报告2',
      extra: ''
    },
    'report3': {
      title: '乡村振兴青年人才流失调查',
      phase: '第二期',
      description: '分析乡村青年人才流失原因及对策。',
      image: 'https://via.placeholder.com/800x400/e54b4b/FFFFFF?text=调研报告3',
      extra: ''
    },
    'report4': {
      title: '数字乡村建设可行性报告',
      phase: '第二期',
      description: '探讨数字技术在乡村建设中的应用前景。',
      image: 'https://via.placeholder.com/800x400/2c3e50/FFFFFF?text=调研报告4',
      extra: ''
    },
    'report5': {
      title: '文化旅游资源开发评估',
      phase: '第三期',
      description: '对溆浦文化旅游资源进行全面评估。',
      image: 'https://via.placeholder.com/800x400/f8f9fa/5d2b8b?text=调研报告5',
      extra: ''
    },
    'report6': {
      title: '乡村治理体系现代化研究',
      phase: '第三期',
      description: '分析乡村治理现状，提出现代化治理策略。',
      image: 'https://via.placeholder.com/800x400/5d2b8b/FFFFFF?text=调研报告6',
      extra: ''
    }
  }
};

// 4. 详情弹窗渲染函数和点击事件监听
const memberDetailOverlay = document.getElementById('member-detail-overlay');
const achievementDetailOverlay = document.getElementById('achievement-detail-overlay');

function renderMemberDetail(id) {
  const member = data.members[id];
  if (member) {
    document.getElementById('member-detail-photo').src = member.photo;
    document.getElementById('member-detail-name').textContent = member.name;
    document.getElementById('member-detail-role').textContent = member.role;
    document.getElementById('member-detail-bio').textContent = member.bio;
  }
}

function renderAchievementDetail(id) {
  const achievement = data.achievements[id];
  if (achievement) {
    document.getElementById('achievement-detail-image').src = achievement.image;
    document.getElementById('achievement-detail-title').textContent = achievement.title;
    document.getElementById('achievement-detail-phase').textContent = achievement.phase;
    document.getElementById('achievement-detail-description').textContent = achievement.description;
    document.getElementById('achievement-detail-extra').innerHTML = achievement.extra;
  }
}

document.addEventListener('click', function(e) {
  if (e.target.closest('.member-card')) {
    const id = e.target.closest('.member-card').getAttribute('data-id');
    renderMemberDetail(id);
    memberDetailOverlay.classList.add('active');
  }

  if (e.target.closest('.achievement-card')) {
    const id = e.target.closest('.achievement-card').getAttribute('data-id');
    renderAchievementDetail(id);
    achievementDetailOverlay.classList.add('active');
  }

  if (e.target.closest('.close-btn') || e.target.classList.contains('overlay')) {
    if (memberDetailOverlay.classList.contains('active')) {
      memberDetailOverlay.classList.remove('active');
    }
    if (achievementDetailOverlay.classList.contains('active')) {
      achievementDetailOverlay.classList.remove('active');
    }
  }
});


// 5. 分类展开/收起功能
document.addEventListener('DOMContentLoaded', function() {
  const expandButtons = document.querySelectorAll('.expand-btn');

  expandButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const category = document.getElementById(targetId);
      const grid = category.querySelector('.achievement-grid') || category.querySelector('.member-grid');

      if (grid.classList.contains('collapsed')) {
        // 展开
        grid.classList.remove('collapsed');
        this.textContent = '收起';
      } else {
        // 收起
        grid.classList.add('collapsed');
        this.textContent = '查看更多成果';
        // (可选) 折叠时滚动回顶部
        category.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  // --- 页面加载时的哈希处理 ---
  window.addEventListener('hashchange', function() {
    const hash = window.location.hash;
    if (hash.startsWith('#member-detail-')) {
      document.getElementById('achievement-detail-overlay').classList.remove('active'); // 关闭其他弹窗
      renderMemberDetail(hash.substring(1));
      memberDetailOverlay.classList.add('active');
    } else if (hash.startsWith('#achievement-detail-')) {
      document.getElementById('member-detail-overlay').classList.remove('active'); // 关闭其他弹窗
      renderAchievementDetail(hash.substring(1));
      achievementDetailOverlay.classList.add('active');
    } else if (hash === '#members' || hash === '#achievements' || hash === '' || hash === '#contact-us' || hash === '#home' || hash === '#about-us') {
      memberDetailOverlay.classList.remove('active');
      achievementDetailOverlay.classList.remove('active');
    }
  });

  // 页面初次加载时检查哈希，看是否需要打开详情弹窗
  if (window.location.hash.startsWith('#member-detail-')) {
    renderMemberDetail(window.location.hash.substring(1));
    memberDetailOverlay.classList.add('active');
  } else if (window.location.hash.startsWith('#achievement-detail-')) {
    renderAchievementDetail(window.location.hash.substring(1));
    achievementDetailOverlay.classList.add('active');
  }
});

// 6. 平滑滚动到锚点并更新导航激活状态
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // 仅处理内部链接，不处理详情弹窗链接
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });

        // 更新 URL 哈希，但不触发哈希改变事件
        window.history.pushState(null, null, this.getAttribute('href'));
      }
    }
  });
});

// 观察器用于更新导航激活状态
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul li a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 移除所有链接的active类
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      // 找到与当前可见section对应的导航链接并添加active类
      const activeLink = document.querySelector(`nav ul li a[href="#${entry.target.id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}, {
  rootMargin: "-30% 0px -30% 0px", // 调整激活区域，当章节进入视口中部时激活
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});