export const saveUserData = (userData) => {
  try {
    // Save to localStorage
    localStorage.setItem('userData', JSON.stringify({
      username: userData.username,
      loginTime: new Date().toISOString(),
      quizScores: userData.quizScores || [],
      flashcards: userData.flashcards || [],
      notes: userData.notes || []
    }));
  } catch (error) {
    console.error('Error saving user data:', error);
  }
};

export const getUserData = () => {
  try {
    const data = localStorage.getItem('userData');
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error getting user data:', error);
    return null;
  }
};

export const clearUserData = () => {
  localStorage.removeItem('userData');
};