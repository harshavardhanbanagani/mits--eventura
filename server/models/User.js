// server/models/User.js

// ... (imports and other schema fields)

const UserSchema = new mongoose.Schema({
  // ... (other fields)
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: [8, 'Password must be at least 8 characters'],
    select: false, // Don't include password in queries by default
    validate: {
      validator: function(value) {
        // Require at least one uppercase, one lowercase, one number, and one special character
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(value);
      },
      message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
    },
  },
  // ... (rest of the schema)
});

// ... (rest of the file)
