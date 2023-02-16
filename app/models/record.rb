class Record < ApplicationRecord
  belongs_to :user

  validates :date,       presence: true
  validates :total_time, presence: true
end
