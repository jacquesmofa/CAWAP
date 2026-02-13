// Import the Supabase submission hook we created earlier
// This is the SAME hook used in the contact form - reusable code!
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ScrollReveal from '../../components/effects/ScrollReveal';
import { useSupabaseSubmit } from '../../hooks/useSupabaseSubmit';

const DonatePage = () => {
  // Form state - stores all the user's input as they type
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    amount: '',
    customAmount: '',
    donationType: 'one-time',
    paymentMethod: 'credit-card',
    message: '',
  });

  // Use our custom Supabase hook - SAME pattern as contact form!
  // This hook handles: loading state, success/error messages, and database submission
  const { submitToSupabase, isSubmitting, submitStatus } = useSupabaseSubmit();

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  // Handle any input change (text fields, dropdowns, etc.)
  // This function updates the formData state whenever user types
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle clicking on predefined amount buttons ($25, $50, etc.)
  // When user clicks an amount, we update the form and clear custom amount
  const handleAmountSelect = (amount: number) => {
    setFormData(prev => ({
      ...prev,
      amount: amount.toString(),
      customAmount: '', // Clear custom amount when selecting predefined
    }));
  };

  // Handle form submission - this is where the magic happens!
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload (default form behavior)

    // STEP 1: Determine the final donation amount
    // If user selected "custom", use customAmount, otherwise use selected amount
    const finalAmount = formData.amount === 'custom' ? formData.customAmount : formData.amount;
    
    // STEP 2: Prepare data for Supabase
    // We create an object with all the donation information
    // This matches the columns in our "donation_records" table
    const donationData = {
      first_name: formData.firstName,      // Donor's first name
      last_name: formData.lastName,        // Donor's last name
      email: formData.email,               // Donor's email (for receipt)
      phone: formData.phone || null,       // Phone is optional, use null if empty
      amount: parseFloat(finalAmount),     // Convert string to number for database
      donation_type: formData.donationType, // "one-time" or "monthly"
      payment_method: formData.paymentMethod, // How they want to pay
      message: formData.message || null,   // Optional message, null if empty
      created_at: new Date().toISOString(), // Timestamp of when donation was made
    };

    // STEP 3: Submit to Supabase using our reusable hook
    // The hook handles all the complexity: error handling, loading states, etc.
    const success = await submitToSupabase('donation_records', donationData);

    // STEP 4: If successful, clear the form so user can make another donation
    if (success) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        amount: '',
        customAmount: '',
        donationType: 'one-time',
        paymentMethod: 'credit-card',
        message: '',
      });
    }
    // If failed, the hook automatically shows an error message
    // No need to handle errors here - the hook does it for us!
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=diverse%20Canadian%20and%20African%20hands%20coming%20together%20in%20unity%20and%20support%20showing%20generosity%20and%20giving%2C%20warm%20golden%20lighting%20creating%20hopeful%20inspiring%20atmosphere%2C%20professional%20photography%20with%20soft%20focus%20background%20representing%20community%20philanthropy%20and%20charitable%20giving%2C%20heartwarming%20scene%20of%20people%20helping%20others%2C%20bright%20uplifting%20colors%20symbolizing%20hope%20and%20transformation%2C%20ultra%20HD%208K%20quality&width=1920&height=400&seq=donate-hero-v2&orientation=landscape')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Make a Difference Today</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your generosity empowers women and transforms lives in our community
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                  <h2 className="text-3xl font-bold text-[#3c1053] mb-6">Donation Information</h2>
                  
                  {/* 
                    FORM ELEMENT - The container for all donation inputs
                    - onSubmit: Calls handleSubmit when user clicks "Complete Donation"
                    - data-readdy-form: Special attribute for Readdy platform tracking
                    - id: Unique identifier for this form
                  */}
                  <form onSubmit={handleSubmit} data-readdy-form id="donation-form">
                    {/* Personal Information */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9b037] focus:border-transparent text-sm"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9b037] focus:border-transparent text-sm"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9b037] focus:border-transparent text-sm"
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9b037] focus:border-transparent text-sm"
                            placeholder="(123) 456-7890"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Donation Type */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Donation Type</h3>
                      <div className="flex gap-4">
                        <label className="flex-1 cursor-pointer">
                          <input
                            type="radio"
                            name="donationType"
                            value="one-time"
                            checked={formData.donationType === 'one-time'}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className={`p-4 border-2 rounded-lg text-center transition-all duration-300 ${
                            formData.donationType === 'one-time'
                              ? 'border-[#c9b037] bg-[#c9b037]/10'
                              : 'border-gray-300 hover:border-[#c9b037]/50'
                          }`}>
                            <div className="font-semibold text-gray-800">One-Time</div>
                          </div>
                        </label>
                        <label className="flex-1 cursor-pointer">
                          <input
                            type="radio"
                            name="donationType"
                            value="monthly"
                            checked={formData.donationType === 'monthly'}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className={`p-4 border-2 rounded-lg text-center transition-all duration-300 ${
                            formData.donationType === 'monthly'
                              ? 'border-[#c9b037] bg-[#c9b037]/10'
                              : 'border-gray-300 hover:border-[#c9b037]/50'
                          }`}>
                            <div className="font-semibold text-gray-800">Monthly</div>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Donation Amount */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Select Amount *</h3>
                      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                        {predefinedAmounts.map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            onClick={() => handleAmountSelect(amount)}
                            className={`p-4 border-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                              formData.amount === amount.toString()
                                ? 'border-[#c9b037] bg-[#c9b037] text-white'
                                : 'border-gray-300 text-gray-800 hover:border-[#c9b037]'
                            }`}
                          >
                            ${amount}
                          </button>
                        ))}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Or Enter Custom Amount
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                            $
                          </span>
                          <input
                            type="number"
                            name="customAmount"
                            value={formData.customAmount}
                            onChange={(e) => {
                              handleInputChange(e);
                              setFormData(prev => ({ ...prev, amount: 'custom' }));
                            }}
                            min="1"
                            className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9b037] focus:border-transparent text-sm"
                            placeholder="Enter amount"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h3>
                      <div className="space-y-3">
                        <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 hover:border-[#c9b037]">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="credit-card"
                            checked={formData.paymentMethod === 'credit-card'}
                            onChange={handleInputChange}
                            className="w-5 h-5 text-[#c9b037] cursor-pointer"
                          />
                          <span className="ml-3 font-medium text-gray-800">Credit/Debit Card</span>
                          <div className="ml-auto flex gap-2">
                            <i className="ri-visa-line text-2xl text-gray-600"></i>
                            <i className="ri-mastercard-line text-2xl text-gray-600"></i>
                          </div>
                        </label>
                        <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 hover:border-[#c9b037]">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="paypal"
                            checked={formData.paymentMethod === 'paypal'}
                            onChange={handleInputChange}
                            className="w-5 h-5 text-[#c9b037] cursor-pointer"
                          />
                          <span className="ml-3 font-medium text-gray-800">PayPal</span>
                          <i className="ri-paypal-line text-2xl text-gray-600 ml-auto"></i>
                        </label>
                        <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 hover:border-[#c9b037]">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="bank-transfer"
                            checked={formData.paymentMethod === 'bank-transfer'}
                            onChange={handleInputChange}
                            className="w-5 h-5 text-[#c9b037] cursor-pointer"
                          />
                          <span className="ml-3 font-medium text-gray-800">Bank Transfer</span>
                          <i className="ri-bank-line text-2xl text-gray-600 ml-auto"></i>
                        </label>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        maxLength={500}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9b037] focus:border-transparent text-sm resize-none"
                        placeholder="Share why you're supporting CAWAP (max 500 characters)"
                      />
                      <div className="text-right text-sm text-gray-500 mt-1">
                        {formData.message.length}/500
                      </div>
                    </div>

                    {/* Submit Button */}
                    {/* 
                      SUBMIT BUTTON - Triggers form submission
                      - disabled: Button is disabled if:
                        1. Form is currently submitting (prevents double-submission)
                        2. No amount is selected
                        3. User selected "custom" but didn't enter an amount
                      - Shows "Processing..." while submitting to give user feedback
                    */}
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.amount || (!formData.customAmount && formData.amount === 'custom')}
                      className="w-full bg-[#c9b037] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#b39f2f] transition-all duration-300 whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                    >
                      {isSubmitting ? 'Processing...' : 'Complete Donation'}
                    </button>

                    {/* 
                      STATUS MESSAGES - Show success or error feedback
                      These are controlled by the submitStatus from our hook
                      - 'success': Shows green message when donation is saved
                      - 'error': Shows red message if something went wrong
                      - 'idle': Shows nothing (default state)
                    */}
                    {submitStatus === 'success' && (
                      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-800 font-medium">
                          🎉 Thank you for your generous donation! Your contribution has been recorded and will help transform lives in our community.
                        </p>
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-800 font-medium">
                          ❌ There was an error processing your donation. Please try again or contact us at cawap2005@gmail.com
                        </p>
                      </div>
                    )}
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="right">
                {/* Impact Stats */}
                <div className="bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] p-8 rounded-2xl shadow-xl text-white mb-6">
                  <h3 className="text-2xl font-bold mb-6">Your Impact</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="text-3xl font-bold mb-2">$25</div>
                      <p className="text-sm opacity-90">Provides educational materials for one youth</p>
                    </div>
                    <div className="border-t border-white/20 pt-6">
                      <div className="text-3xl font-bold mb-2">$100</div>
                      <p className="text-sm opacity-90">Supports a family with food assistance for a month</p>
                    </div>
                    <div className="border-t border-white/20 pt-6">
                      <div className="text-3xl font-bold mb-2">$500</div>
                      <p className="text-sm opacity-90">Funds a complete empowerment workshop</p>
                    </div>
                  </div>
                </div>

                {/* E-Transfer Option */}
                <div className="bg-white p-6 rounded-2xl shadow-xl mb-6 border border-gray-100">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#c9b037]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-mail-line text-2xl text-[#c9b037]"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">E-Transfer Option</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        You can also send your donation via e-transfer to:
                      </p>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-mono text-[#3c1053] font-semibold break-all">
                          cawap2005@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="ri-shield-check-line text-xl text-green-600"></i>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">Secure Donation</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Your donation is secure and encrypted. We protect your personal information with industry-standard security measures.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DonatePage;
