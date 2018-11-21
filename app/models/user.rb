# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :lists,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :List

  has_many :tasks,
    through: :lists,
    source: :tasks

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return user if user && user.is_password?(password)
    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    self.save!
    self.session_token
  end

  def generate_unique_session_token
    self.session_token = User.generate_session_token
    while User.find_by_session_token(self.session_token)
      self.session_token = User.generate_session_token
    end
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
    # generate_unique_session_token unless self.session_token
  end
end
