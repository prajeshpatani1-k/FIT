import google.generativeai as genai  # Add this import

class FitnessAI:
    def __init__(self, api_key=None):
        self.api_key = api_key
        self.ai_enabled = api_key is not None
        
        if self.ai_enabled:
            try:
                genai.configure(api_key=self.api_key)
                self.model = genai.GenerativeModel('gemini-pro')
                print("✅ Gemini AI configured successfully")
            except Exception as e:
                print(f"❌ Gemini configuration failed: {e}")
                self.ai_enabled = False
    def get_ai_feedback(self, analysis_data):
        """Get AI-powered fitness feedback from Gemini"""
        if not self.ai_enabled:
            return None
            
        try:
            prompt = f"""
            As an expert fitness coach with 10+ years experience, analyze this squat form data and provide specific, actionable feedback:

            SQUAT FORM ANALYSIS DATA:
            - Knee Angles: Left {analysis_data['knee_angles']['left']}°, Right {analysis_data['knee_angles']['right']}°
            - Hip Angles: Left {analysis_data['hip_angles']['left']}°, Right {analysis_data['hip_angles']['right']}°
            - Current Notes: {', '.join(analysis_data['notes'])}
            
            Provide 2-3 specific, actionable recommendations focusing on:
            1. Depth and range of motion improvement
            2. Balance and symmetry between sides
            3. Upper body positioning and core engagement
            4. Safety considerations and injury prevention
            
            Keep the response concise, professional, and encouraging. Focus on practical fixes the user can implement immediately.
            
            Format your response as bullet points starting with •
            """

            response = self.model.generate_content(prompt)
            return response.text
                
        except Exception as e:
            print(f"Gemini AI feedback error: {e}")
            return None