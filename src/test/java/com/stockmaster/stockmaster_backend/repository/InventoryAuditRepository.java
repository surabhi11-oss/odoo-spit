package com.stockmaster.stockmaster_backend.repository;

import com.stockmaster.stockmaster_backend.entity.InventoryAudit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InventoryAuditRepository extends JpaRepository<InventoryAudit, Long> {
}
