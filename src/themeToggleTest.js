// Theme Toggle Test Script
// Run this in the browser console to test theme toggle functionality

console.log('🧪 Testing Theme Toggle Functionality...');

// Test 1: Check if localStorage is available
function testLocalStorage() {
  try {
    localStorage.setItem('themeTest', 'test');
    const result = localStorage.getItem('themeTest');
    localStorage.removeItem('themeTest');
    console.log('✅ localStorage is working');
    return true;
  } catch (error) {
    console.log('❌ localStorage is not available:', error);
    return false;
  }
}

// Test 2: Check if dark mode class is applied
function testDarkModeClass() {
  const body = document.body;
  const hasDarkClass = body.classList.contains('dark-mode');
  console.log('Current theme:', hasDarkClass ? 'dark' : 'light');
  return hasDarkClass;
}

// Test 3: Check if theme toggle button exists
function testToggleButton() {
  const toggleBtn = document.querySelector('[aria-label*="mode"]');
  if (toggleBtn) {
    console.log('✅ Theme toggle button found');
    return true;
  } else {
    console.log('❌ Theme toggle button not found');
    return false;
  }
}

// Test 4: Simulate theme toggle
function testToggleFunctionality() {
  const toggleBtn = document.querySelector('[aria-label*="mode"]');
  if (toggleBtn) {
    const initialTheme = document.body.classList.contains('dark-mode');
    console.log('Initial theme:', initialTheme ? 'dark' : 'light');
    
    // Click the toggle button
    toggleBtn.click();
    
    // Wait a bit and check if theme changed
    setTimeout(() => {
      const newTheme = document.body.classList.contains('dark-mode');
      console.log('Theme after toggle:', newTheme ? 'dark' : 'light');
      
      if (initialTheme !== newTheme) {
        console.log('✅ Theme toggle is working correctly');
      } else {
        console.log('❌ Theme toggle is not working');
      }
    }, 100);
  }
}

// Run all tests
console.log('\n=== Running Tests ===');
const localStorageTest = testLocalStorage();
const currentTheme = testDarkModeClass();
const buttonTest = testToggleButton();

console.log('\n=== Test Results ===');
console.log(`localStorage: ${localStorageTest ? '✅ PASS' : '❌ FAIL'}`);
console.log(`Toggle Button: ${buttonTest ? '✅ PASS' : '❌ FAIL'}`);
console.log(`Current Theme: ${currentTheme ? '🌙 Dark' : '☀️ Light'}`);

if (localStorageTest && buttonTest) {
  console.log('\n🎉 Basic functionality tests passed!');
  console.log('Click the theme toggle button to test the full functionality.');
} else {
  console.log('\n⚠️ Some basic tests failed. Check the console for errors.');
}

// Export functions for manual testing
window.themeToggleTest = {
  testLocalStorage,
  testDarkModeClass,
  testToggleButton,
  testToggleFunctionality
}; 