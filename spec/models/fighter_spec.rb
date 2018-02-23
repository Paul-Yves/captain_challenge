require "rails_helper"

RSpec.describe Fighter, :type => :model do
  context "creation validation" do
    it "prevent creating invalid fighter" do
      expect{Fighter.create!(name: 'toto', max_life: 15, ability: 40, speed: 40, strength: 30)}.to raise_error(ActiveRecord::RecordInvalid)
      expect{Fighter.create!(name: 'toti', max_life: 12, ability: 70, speed: 70, strength: 30)}.to raise_error(ActiveRecord::RecordInvalid)
    end
    it "allows creating valid fighter" do
      Fighter.create!(name: 'tota', max_life: 12, ability: 40, speed: 40, strength: 30)
    end
  end
end