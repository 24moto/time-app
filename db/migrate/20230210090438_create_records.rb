class CreateRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :records do |t|
      t.string     :title
      t.string     :title_detail
      t.time       :total_time,  null: false
      t.string     :goal
      t.string     :note
      t.date       :date,        null: false
      t.references :user,        null: false, foreign_key: true 
      t.timestamps
    end
  end
end
